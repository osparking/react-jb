import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: ["react-hooks"],
    rules: {
      "react-hooks/rules-of-hooks": "error", // 훅의 기본 규칙 준수 여부 (에러 처리)
      "react-hooks/exhaustive-deps": "warn", // ✨ 의존성 배열 체크 (경고 처리)
    },
  },
]);
