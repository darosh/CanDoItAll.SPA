#!/usr/bin/env node
// Repairs a few real bugs in the .NET-emitted OpenAPI 3.1 document that trip up
// tsp-openapi3 (the TypeSpec OpenAPI3 importer) before we hand it off. Kept as a
// separate, inspectable step rather than hidden inside the generate script so the
// specific backend quirks being worked around stay visible.
import { readFileSync, writeFileSync } from "node:fs";

const [, , srcPath, dstPath] = process.argv;
if (!srcPath || !dstPath) {
  console.error("Usage: node prepare-spec.mjs <input.json> <output.json>");
  process.exit(1);
}

const doc = JSON.parse(readFileSync(srcPath, "utf8"));

/** tsp-openapi3 emits `scalar X extends integer = <default>;` for a named scalar
 * schema that carries a bare `default`, which isn't valid TypeSpec syntax and
 * crashes its own formatter. The default isn't load-bearing for a generated
 * client, so drop it from named scalar (non-enum, non-object) schemas.
 */
function stripScalarDefaults(schemas) {
  for (const schema of Object.values(schemas ?? {})) {
    if (
      schema &&
      typeof schema === "object" &&
      "default" in schema &&
      !("enum" in schema) &&
      typeof schema.type === "string" &&
      ["integer", "number", "string", "boolean"].includes(schema.type)
    ) {
      delete schema.default;
    }
  }
}

/** Some minimal-API endpoints omit an explicit [FromRoute] binding (e.g.
 * `/managed-files/{path}`), so the route template's `{name}` segment has no
 * matching `parameters` entry — a genuine spec bug. Backfill a plain string
 * path parameter for any segment missing one.
 */
function ensurePathParamsDefined(paths) {
  for (const [template, pathItem] of Object.entries(paths ?? {})) {
    const names = [...template.matchAll(/\{([^}]+)\}/g)].map((m) => m[1]);
    if (names.length === 0) continue;
    const pathLevelParams = pathItem.parameters ?? [];
    for (const method of ["get", "post", "put", "delete", "patch"]) {
      const op = pathItem[method];
      if (!op) continue;
      op.parameters ??= [];
      for (const name of names) {
        const defined = [...op.parameters, ...pathLevelParams].some(
          (p) => p.name === name && p.in === "path",
        );
        if (!defined) {
          op.parameters.push({ name, in: "path", required: true, schema: { type: "string" } });
        }
      }
    }
  }
}

/** A handful of named schemas (WorkflowId, PluginConnectionId, ...) are emitted as
 * bare `{}` — no type, enum, $ref, or composition — presumably strongly-typed IDs
 * on the .NET side that lost their shape in translation. tsp-openapi3 renders
 * these as a scalar with no base type (`scalar WorkflowId;`), which crashes the
 * http-client-js emitter ("Unknown scalar type"). Treat them as opaque strings.
 */
function fillEmptySchemas(schemas) {
  for (const schema of Object.values(schemas ?? {})) {
    if (!schema || typeof schema !== "object") continue;
    const isEmpty =
      !("type" in schema) &&
      !("enum" in schema) &&
      !("$ref" in schema) &&
      !("allOf" in schema) &&
      !("oneOf" in schema) &&
      !("anyOf" in schema) &&
      !("properties" in schema);
    if (isEmpty) {
      schema.type = "string";
    }
  }
}

/** OpenAPI's default query-param serialization is `style: form, explode: true`
 * for every parameter regardless of schema type, since explode is a no-op for
 * scalars under RFC 6570 (it only changes behavior for arrays/objects). The
 * `@typespec/http-client-js` emitter instead carries that default straight
 * into the generated URI template's explode modifier (`{?Text*}`) even for
 * scalar params, and the `uri-template` package it emits calls into mishandles
 * explode on a scalar value — it drops the key name entirely and emits the
 * bare value (`?TEST` instead of `?Text=TEST`), silently corrupting query
 * strings like `/prompt-gallery/items?TEST&25&true`. Since explode is a no-op
 * for scalars per spec, pin it to false there so the emitted template omits
 * the `*` and the generated code round-trips correctly.
 */
function fixScalarQueryParamExplode(paths, schemas) {
  const resolve = (schema) => {
    if (!schema?.$ref) return schema;
    const name = schema.$ref.split("/").pop();
    return schemas?.[name] ?? schema;
  };
  for (const pathItem of Object.values(paths ?? {})) {
    for (const method of ["get", "post", "put", "delete", "patch"]) {
      const op = pathItem[method];
      if (!op) continue;
      for (const param of op.parameters ?? []) {
        if (param.in !== "query") continue;
        const schema = resolve(param.schema);
        if (schema?.type === "array" || schema?.type === "object") continue;
        param.explode = false;
      }
    }
  }
}

stripScalarDefaults(doc.components?.schemas);
ensurePathParamsDefined(doc.paths);
fillEmptySchemas(doc.components?.schemas);
fixScalarQueryParamExplode(doc.paths, doc.components?.schemas);

writeFileSync(dstPath, JSON.stringify(doc, null, 2));
