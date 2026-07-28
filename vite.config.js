import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite 설정. React 플러그인만 켜져 있으면 충분합니다.
export default defineConfig({
  plugins: [react()],
});
