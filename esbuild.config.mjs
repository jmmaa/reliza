import * as esbuild from "esbuild"


await esbuild.build({
    entryPoints: ["src/index.ts"],
    tsconfig: "tsconfig.json",
    outfile: "lib/index.js",
    minify: true,
    bundle: true,
})

await esbuild.build({
    entryPoints: ["src/index.ts"],
    tsconfig: "tsconfig.json",
    outfile: "lib/index.esm.js",
    minify: true,
    bundle: true,
})