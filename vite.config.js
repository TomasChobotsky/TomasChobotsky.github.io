import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),   //  ←  this line is critical
    },
  },
  base: "/",
  build: { outDir: "dist" }
});
