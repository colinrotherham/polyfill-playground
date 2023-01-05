export default () => ({
  compact: false,
  sourceMaps: true,

  plugins: [
    // Replace unsupported code with `core-js-pure` ponyfills
    ['@babel/plugin-transform-runtime', {
      corejs: {
        version: 3,
        proposals: true
      }
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
