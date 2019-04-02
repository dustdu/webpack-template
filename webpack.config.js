const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  // 生成 source map。生产环境不需要
  // devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
 },
 mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin(),
    // 热更新
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
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
  }
}