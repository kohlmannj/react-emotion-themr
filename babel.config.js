module.exports = api => ({
  presets: [
    [
      '@babel/preset-env',
      {
        modules: api.env('test') ? 'commonjs' : false,
        // corejs: 3,
        useBuiltIns: false,
      },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      { corejs: 3, proposals: true, useESModules: !api.env('test') },
    ],
  ],
});
