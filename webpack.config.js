const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = ({ isProduction }) => {
  return {
    mode: isProduction ? 'production' : 'development',

    entry: {
      index: './src/index.js'
    },

    output: {
      path: __dirname + '/public',
      filename: '[name].js',
      chunkFilename: '[name].js?id=[chunkhash]'
    },

    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules\/(?!svelte)/,
          use: ['babel-loader']
        },
        {
          test: /\.svelte$/,
          exclude: /node_modules\/(?!svelte)/,
          use: ['babel-loader', {
            loader: 'svelte-loader',
            options: {
              dev: !isProduction,
            }
          }]
        }
      ]
    },

    resolve: {
      alias: {
        svelte: path.resolve('node_modules', 'svelte'),
        components: path.resolve(__dirname, './src/components'),
        stores: path.resolve(__dirname, './src/stores'),
      },
      extensions: ['.mjs', '.js', '.svelte'],
      mainFields: ['svelte', 'browser', 'module', 'main']
    },

    devtool: isProduction ? false : 'source-map',

    devServer: {
      contentBase: './public',
      historyApiFallback: true,
      host: 'localhost',
      hot: false,
      noInfo: true,
      open: true,
      port: '8040',
      progress: true,
      stats: {
        all: false,
        warnings: true,
        errors: true
      }
    },

    plugins: [
      new CopyPlugin([
        './src/index.html',
        './src/static'
      ]),

      ...(isProduction ? [
        new CleanWebpackPlugin()
      ] : [])
    ],
  }
};
