const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WebpackManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  entry: './src/index.js',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(),
    new WebpackManifestPlugin()
  ]
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         {
  //           loader: 'style-loader',
  //           options: {
  //             hmr: false
  //           }
  //         },
  //         {
  //           loader: 'css-loader',
  //         }
  //       ]
  //     },
  //     {
  //       test: /\.(png|svg|jpg|gif)$/,
  //       use: [
  //         {
  //           loader: 'file-loader'
  //         }
  //       ]
  //     },
  //     {
  //            test: /\.(woff|woff2|eot|ttf|otf)$/,
  //             use: [
  //                'file-loader'
  //                ]
  //              }
  //   ]
  // }
}