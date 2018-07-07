const { resolve } = require('path')
const { injectBabelPlugin } = require('react-app-rewired');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const SRC = resolve(__dirname, 'src');

console.log(SRC);

module.exports = function override(config, env) {
  config.resolve = {
    modules: [
      'node_modules',
      SRC,
    ],
  };
  config = injectBabelPlugin(
    ['emotion', { autoLabel: true, labelFormat: '[local]' }],
    config
  );
  if (env === "production") {
    config.plugins = (config.plugins || []).concat([
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: "report.html",
        openAnalyzer: false
      }),
    ]);
  }
  return config;
};
