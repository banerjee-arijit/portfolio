import { defineConfig } from "vite";
import path from "path"; // <-- add this
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <-- add this
    },
  },
});
