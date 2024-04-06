import * as esbuild from "esbuild";

await esbuild.build({
    entryPoints: ["src/index.ts"],
    tsconfig: "tsconfig.json",
    outfile: "lib/index.js",
    format: "cjs",
    minify: true,
    bundle: true,
    logLevel: "info"
})


await esbuild.build({
  entryPoints: ["src/index.ts"],
  tsconfig: "tsconfig.json",
  outfile: "lib/index.esm.js",
  format: "esm",
  minify: true,
  bundle: true,
  logLevel: "info"
});

