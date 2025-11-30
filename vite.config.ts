import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import metaMapPlugin from "vite-plugin-react-meta-map";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    metaMapPlugin({
      pageMetaMapFilePath: "./src/pageMetaMap.ts",
      pageTemplateFilePath: "./src/PageTemplate.tsx",
    }),
  ],
  publicDir: "public",
  build: {
    minify: true,
    outDir: "dist",
    assetsDir: "assets",
  },
});
