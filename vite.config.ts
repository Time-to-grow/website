import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const port = {
  host: true,
  port: 3000
};

export default defineConfig({
  plugins: [react()],
  server: port,
  preview: port,
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
