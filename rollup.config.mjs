import path from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import fs from 'fs'

function getEntries(dir) {
    if (!fs.existsSync(dir)) return {};
    return Object.fromEntries(
        fs.readdirSync(dir)
            .filter(f => f.endsWith('.js') && !f.endsWith('.cjs.js'))
            .map(f => [
                path.join(dir, f.replace(/\.js$/, '')), // output basename
                path.join(dir, f) // input file
            ])
    );
}

const formEntries = getEntries('dist/form');
const listEntries = getEntries('dist/list');
const allEntries = { ...formEntries, ...listEntries };

export default [
    {
        input: allEntries,
        output: {
            dir: '.',
            entryFileNames: '[name].js',
            format: 'es',
            sourcemap: false,
            preserveModules: true,
            preserveModulesRoot: 'dist',
        },
        plugins: [nodeResolve(), commonjs()],
        external: [],
    },
    {
        input: allEntries,
        output: {
            dir: '.',
            entryFileNames: '[name].cjs.js',
            format: 'cjs',
            sourcemap: false,
            preserveModules: true,
            preserveModulesRoot: 'dist',
            exports: 'auto',
        },
        plugins: [nodeResolve(), commonjs()],
        external: [],
    },
];
