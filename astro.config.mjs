import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://shevegas.com",
  output: "static",
  build: { format: "directory" },
  compressHTML: true,
});
