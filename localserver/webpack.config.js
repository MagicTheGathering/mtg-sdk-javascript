const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
module.exports = {
  entry: ['babel-polyfill', './src/entry-js.js'],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'node_modules/')
        ],
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [
          path.join(__dirname, 'node_modules/')
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 500,
            name: './img/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 500,
            name: './fonts/[name].[ext]'
          }
        }]
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'bower_components',
      'node_modules'
    ],
    extensions: [
      '.js',
      '.jsx',
      '.style'
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './css/bundle.css',
      disable: false,
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
