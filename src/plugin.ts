// Package entrypoint: exactly one plugin export, no helpers.
//
// OpenCode treats every named export of a plugin module as a plugin and calls
// it with the plugin input (see https://opencode.ai/docs/plugins/ — plugins are
// `export const MyPlugin = async (...) => ...`). index.ts also exports helpers
// (buildTemplateVariables, getSessionID, ...) for tests and reuse; when index.js
// was the entry, OpenCode invoked those helpers as plugins and the load failed
// with "undefined is not an object (evaluating 'event.properties')" (observed on
// OpenCode 1.18.27). The default export is kept for consumers that import it.
import plugin from "./index.js";

export const OpencodeNtfySmart = plugin;
export default plugin;
