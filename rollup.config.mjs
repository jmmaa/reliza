/**
 * @type {import('rollup').RollupOptions}
 */

import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import nodeResolve from "@rollup/plugin-node-resolve"


export default {

    input: "src/index.ts",
    output: [
        {
            file: "lib/main.js",
            format: "cjs"
        },
        {
            file: "lib/main.esm.js",
            format: "es"
        }
    ],
    
    plugins: [commonjs(), typescript({module: "ESNext"}), nodeResolve()]
}