import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

// Custom plugin to handle optional peer dependencies
const handleOptionalPeerDeps = (): Plugin => ({
  name: "handle-optional-peer-deps",
  resolveId(id) {
    // Stub out Next.js navigation for non-Next.js projects
    if (id.includes("next/navigation")) {
      return path.resolve(__dirname, "./src/utils/noop.ts");
    }
    return null;
  },
  load(id) {
    if (id.includes("__vite-optional-peer-dep:next/navigation")) {
      // Return a stub module for Next.js navigation
      return `
        export const useParams = () => ({});
        export const usePathname = () => "";
        export const useSearchParams = () => new URLSearchParams();
        export const useRouter = () => ({});
      `;
    }
    return null;
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      generatedRouteTree: "./src/router-tree-gen.ts",
      routesDirectory: "./src/pages",
      routeToken: "layout"
    }),
    react(),
    tailwindcss(),
    handleOptionalPeerDeps(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@vercel/analytics"],
  },
  build: {
    rollupOptions: {
      external: (id) => {
        // Externalize Next.js specific modules to prevent build errors
        return id.includes("next/navigation") || id.includes("@vercel/analytics/dist/next");
      },
    },
  },
});
