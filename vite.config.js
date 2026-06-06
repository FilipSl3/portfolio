import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ⚠️ GITHUB PAGES: a project site is served from /<repo-name>/, so Vite must
// build asset paths under that sub-path. Set `base` to your repository name
// (keep the leading and trailing slash). Examples:
//   repo "portfolio"     -> base: "/portfolio/"
//   repo "moje-cv"       -> base: "/moje-cv/"
// Use "/" instead if you deploy to <login>.github.io (root repo) or a custom domain.
const REPO_NAME = "portfolio";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${REPO_NAME}/`,
  plugins: [react()],
});
