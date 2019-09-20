module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: api.env('test') ? 'commonjs' : false,
        // corejs: 3,
        // useBuiltIns: 'usage',
        // exclude: ['es.function.name'],
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      // TODO: change this for the CJS build (so that the CJS build doesn't try to import ES runtime helpers)
      { corejs: 3, proposals: true, useESModules: !api.env('test') },
    ],
  ],
});
