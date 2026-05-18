/**
 * @amlplugins/google-docs
 *
 * Thin namespaced re-export of the native @googleapis/docs SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Google Docs (docs_v1).
 */

import * as _sdk from "@googleapis/docs";
export * from "@googleapis/docs";
export { _sdk as sdk };
export default _sdk;
