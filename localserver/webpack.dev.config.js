const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'babel-polyfill',
    './src/entry-js.js'
  ],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: __dirname
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './',
    hot: true,
    historyApiFallBack: true
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
        test: /\.css$/,
        use: [{ loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: [
          path.join(__dirname, 'node_modules/')
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 500
          }
        }]
      }
    ]
  },
  resolve: {
    modules: [
      'bower_components',
      'node_modules'
    ],
    extensions: [
      '*',
      '.js',
      '.jsx',
      '.style'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['public']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
