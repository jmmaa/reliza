const { build } = require("esbuild");

Promise.all([
  build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.js",
    format: "cjs",
    logLevel: "info",
    minify: true,
    bundle: true,
    logLevel: "silent",
  }),
  build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.esm.js",
    format: "esm",
    logLevel: "info",
    minify: true,
    bundle: true,
    logLevel: "silent",
  }),
  build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.iife.js",
    format: "iife",
    logLevel: "info",
    globalName: "__reliza__",
    minify: true,
    bundle: true,
    logLevel: "silent",
  }),
]);
