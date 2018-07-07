module.exports = {
  module: {
    rules: [
      {
        test: /\.story\.js?$/,
        enforce: 'pre',
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                singleQuote: true,
                tabWidth: 2,
                bracketSpacing: true,
                trailingComma: 'all',
              },
            },
          },
        ],
      }
    ],
  },
};