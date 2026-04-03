import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm", "cjs"], // or ["esm"] if you prefer
    dts: false,
    sourcemap: true,
    clean: true,
});
