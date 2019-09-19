module.exports = api => ({
  presets: [
    ['@babel/preset-env', { modules: api.env('test') ? 'commonjs' : false }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  // plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
});
