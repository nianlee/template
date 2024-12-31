/*
 * @Author: linian
 * @Date: 2024-12-11 13:56:11
 * @LastEditTime: 2024-12-23 16:35:46
 * @LastEditors: linian
 * @Description: dev config
 */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const hotMiddlewareScript =
'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'; // 热更新
const webpack = require("webpack");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin'); // js 文件链接清单

module.exports = merge(common, {
  entry: {
    index: ['./src/index.js', hotMiddlewareScript]
  }, // 入口文件
  mode: 'development',
  devtool: 'inline-source-map', // moduleId放在文件内容中
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new WebpackManifestPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});