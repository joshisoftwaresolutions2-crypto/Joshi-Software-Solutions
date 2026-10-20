import { defineConfig } from "eslint/config";
import nextConfig from "eslint-config-next/core-web-vitals";
import nextTsConfig from "eslint-config-next/typescript";

export default defineConfig([
  ...nextConfig,
  ...nextTsConfig,
  {
    ignores: [".next/**", "node_modules/**", "next-env.d.ts"],
  },
]);
