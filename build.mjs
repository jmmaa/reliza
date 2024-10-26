import * as esbuild from "esbuild";
import esbuildPluginTsc from 'esbuild-plugin-tsc';


await esbuild.build({
    entryPoints: ["src/index.ts"],
    outfile: "lib/index.js",
    format: "cjs",
    // minify: true,
    // bundle: true,
    logLevel: "info",
})

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "lib/index.esm.js",
  format: "esm",
  // minify: true,
  // bundle: true,
  logLevel: "info",
  plugins: [
    esbuildPluginTsc({
      force: true
    })
  ]
});

await esbuild.build({
  entryPoints: ["src/index.ts"],
  outfile: "lib/index.iife.js",
  format: "iife",
  // minify: true,
  // bundle: true,
  globalName: "__reliza__",
  logLevel: "info",
  plugins: [
    esbuildPluginTsc({
      force: true
    })
  ]
});



// just continue the code