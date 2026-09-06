import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { imagetools } from "vite-imagetools";

export default defineConfig({
  plugins: [
    react(),

    imagetools({
      defaultDirectives: (url) => {
        const extension = url.pathname
          .split(".")
          .pop()
          ?.toLowerCase();

        if (
          extension === "jpg" ||
          extension === "jpeg" ||
          extension === "png"
        ) {
          return new URLSearchParams({
            format: "webp",
            quality: "82",
          });
        }

        return new URLSearchParams();
      },
    }),
  ],
});