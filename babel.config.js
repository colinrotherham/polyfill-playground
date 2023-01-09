export default () => ({
  compact: false,
  sourceMaps: true,

  plugins: [
    // Replace unsupported code with `core-js-pure` ponyfills
    '@babel/plugin-transform-runtime',
    ['polyfill-corejs3', {
      method: 'usage-pure',
      proposals: true
    }]
  ],

  presets: [
    // Transform code for supported browsers
    ['@babel/preset-env', {
      bugfixes: true,
      loose: true,
      modules: false,
      shippedProposals: true
    }]
  ]
})
