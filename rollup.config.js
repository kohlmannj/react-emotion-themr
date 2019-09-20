import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const input = 'src/index.ts';
const extensions = ['.ts', '.tsx'];
const external = [
  '@babel/runtime-corejs3/helpers/defineProperty',
  '@babel/runtime-corejs3/helpers/typeof',
  '@babel/runtime-corejs3/helpers/esm/defineProperty',
  '@babel/runtime-corejs3/helpers/esm/typeof',
  '@babel/runtime-corejs3/core-js-stable/object/assign',
  '@babel/runtime-corejs3/core-js-stable/object/keys',
  '@babel/runtime-corejs3/core-js-stable/instance/reduce',
  '@babel/runtime-corejs3/core-js-stable/instance/concat',
];

const createRollupPluginBabelConfig = (format = 'es') => ({
  babelrc: false,
  extensions,
  exclude: ['node_modules/**'],
  runtimeHelpers: true,
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        corejs: 3,
        useBuiltIns: 'usage',
        exclude: ['es.function.name'],
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      { corejs: 3, proposals: true, useESModules: format === 'es' },
    ],
  ],
});

const plugins = [autoExternal(), resolve({ extensions, preferBuiltIns: false })];

export default [
  {
    input,
    output: { file: pkg.main, format: 'cjs', sourcemap: true },
    external,
    plugins: [...plugins, babel(createRollupPluginBabelConfig('cjs'))],
  },
  {
    input,
    output: { file: pkg.module, format: 'es', sourcemap: true },
    external,
    plugins: [...plugins, babel(createRollupPluginBabelConfig('es'))],
  },
];
