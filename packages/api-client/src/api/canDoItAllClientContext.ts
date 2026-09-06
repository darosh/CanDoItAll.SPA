import {
  type Client,
  type ClientOptions,
  getClient,
} from "@typespec/ts-http-runtime";

export interface CanDoItAllClientContext extends Client {

}export interface CanDoItAllClientOptions extends ClientOptions {
  endpoint?: string;
}export function createCanDoItAllClientContext(
  options?: CanDoItAllClientOptions,
): CanDoItAllClientContext {
  const params: Record<string, any> = {
    endpoint: options?.endpoint ?? "http://localhost:5032/"
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options
  })
}
