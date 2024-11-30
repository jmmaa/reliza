const { build } = require("esbuild");

Promise.all([
  build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.js",
    format: "cjs",
    minify: true,
    bundle: true,
    logLevel: "silent",
  }),
  build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.esm.js",
    format: "esm",
    minify: true,
    bundle: true,
    logLevel: "silent",
  }),
  build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.iife.js",
    format: "iife",
    globalName: "__reliza__",
    minify: true,
    bundle: true,
    logLevel: "silent",
  }),
])


// build({
//   entryPoints: ["src/index.ts"],
//   outfile: "lib/index.js",
//   format: "cjs",
//   minify: true,
//   bundle: true,
//   logLevel: "info",
// }).then(
//   () => build({
//     entryPoints: ["src/index.ts"],
//     outfile: "lib/index.esm.js",
//     format: "esm",
//     minify: true,
//     bundle: true,
//     logLevel: "info",
//   }).then(() => build({
//     entryPoints: ["src/index.ts"],
//     outfile: "lib/index.iife.js",
//     format: "iife",
//     globalName: "__reliza__",
//     minify: true,
//     bundle: true,
//     logLevel: "info",
//   }))
// )

