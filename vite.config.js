import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig( {
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./dist", import.meta.url)),
      },
      {
        find: "@FormComponents",
        replacement: fileURLToPath(
          new URL("./dist/components/FormComponent", import.meta.url)
        ),
      },
      {
        find: "@TextComponents",
        replacement: fileURLToPath(
          new URL("./dist/components/TextComponent", import.meta.url)
        ),
      },
      {
        find: "@Utils",
        replacement: fileURLToPath(new URL("./dist/utils", import.meta.url)),
      },
    ],
  },
});
