import { buildConfig } from "payload/config";
import path from "path";
import { payloadCloud } from "@payloadcms/plugin-cloud";

import Users from "./collections/Users";
import Leads from "./collections/Leads";
import Dashboard from "./views/Dashboard";

export default buildConfig({
  // cors: ["gooogle.com.br"],
  admin: {
    user: Users.slug,
    components: {
      views: {
        Dashboard: Dashboard,
      },
    },
  },

  collections: [Users, Leads],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
});
