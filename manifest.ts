import { Manifest } from "deno-slack-sdk/mod.ts";
import { zendeskCreateDefinition } from "./functions/zendesk_create.ts";

/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/future/manifest
 */
export default Manifest({
  name: "Zendesk",
  description: "Demo functions for Zendesk",
  icon: "assets/zendesk.png",
  functions: [zendeskCreateDefinition],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
