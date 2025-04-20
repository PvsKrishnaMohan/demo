import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@mui/styled-engine": path.resolve(
        __dirname,
        "node_modules/@mui/styled-engine-sc"
      ),
    },
  },
});
