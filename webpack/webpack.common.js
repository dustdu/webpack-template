const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname,'dist')
  },
//  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: '学信投FA'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix:true,
          emitWarning:true,
          emitError:true,
          // eslint options (if necessary)
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: false
            }
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
             test: /\.(woff|woff2|eot|ttf|otf)$/,
              use: [
                 'file-loader'
                 ]
               }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
}