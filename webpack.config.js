const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = [
  {
    entry: [
      'babel-polyfill',
      path.resolve(__dirname, 'entry-app.js')
    ],

    target: 'node',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: '/'
    },

    devtool: '#source-map',

    module: {
      loaders: [
        {
          test: /\.(js)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          include: [path.resolve(__dirname, 'src')],
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        },
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets:[['env', 'es2015']]
          }
        }
      ]
    },

    externals: [nodeExternals()],

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ]
  }
];