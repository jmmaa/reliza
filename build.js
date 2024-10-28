const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.js",
    format: "cjs",
    // minify: true,
    // bundle: true,
    logLevel: "info",
  })
  .then(() => {
    esbuild
      .build({
        entryPoints: ["src/index.ts"],
        outfile: "lib/index.esm.js",
        format: "esm",
        // minify: true,
        // bundle: true,
        logLevel: "info",
      })
      .then(() => {
        esbuild
          .build({
            entryPoints: ["src/index.ts"],
            outfile: "lib/index.iife.js",
            format: "iife",
            // minify: true,
            // bundle: true,
            logLevel: "info",
            globalName: "__reliza__",
          });
      });
  });
