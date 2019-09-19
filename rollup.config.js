import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const input = 'src/index.ts';
const extensions = ['.ts', '.tsx'];
const external = [
  '@babel/runtime-corejs3/helpers/esm/defineProperty',
  '@babel/runtime-corejs3/helpers/esm/typeof',
  '@babel/runtime-corejs3/helpers/esm/extends',
  '@babel/runtime-corejs3/core-js-stable/object/assign',
  '@babel/runtime-corejs3/core-js-stable/object/keys',
  '@babel/runtime-corejs3/core-js-stable/instance/reduce',
  '@babel/runtime-corejs3/core-js-stable/instance/concat',
];

const plugins = [
  autoExternal(),
  resolve({ extensions, preferBuiltIns: false }),
  babel({ extensions, exclude: ['node_modules/**'], runtimeHelpers: true }),
];

export default [
  { input, output: { file: pkg.main, format: 'cjs', sourcemap: true }, external, plugins },
  { input, output: { file: pkg.module, format: 'es', sourcemap: true }, external, plugins },
];
