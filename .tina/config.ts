import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c6dc05a6-8a15-470b-bbad-52ef3629a1f0", // Get this from tina.io
  token: "aca2c667deabcc1ce85c8b50efa4e648402cb07b", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "./",
    },
  },
  schema: {
    collections: [],
  },
});
