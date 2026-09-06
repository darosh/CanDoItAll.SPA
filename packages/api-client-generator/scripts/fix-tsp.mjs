#!/usr/bin/env node
// tsp-openapi3 puts `@oneOf` on multipart file-part properties (e.g.
// `@oneOf file?: HttpPart<null | IFormFile>`), but `@oneOf` only applies to a
// union type or a union-typed property — HttpPart<...> isn't a union, so the
// TypeSpec compiler rejects it. The nullability is already carried by the
// `null | IFormFile` inside HttpPart, so the decorator is redundant; strip it.
import { readFileSync, writeFileSync } from "node:fs";

const [, , tspPath] = process.argv;
if (!tspPath) {
  console.error("Usage: node fix-tsp.mjs <main.tsp>");
  process.exit(1);
}

const src = readFileSync(tspPath, "utf8");
const fixed = src.replace(/@oneOf(\s+\w+\??:\s*HttpPart<)/g, "$1");
writeFileSync(tspPath, fixed);
