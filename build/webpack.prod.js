/*
 * @Author: linian
 * @Date: 2024-12-11 13:56:11
 * @LastEditTime: 2024-12-13 19:17:53
 * @LastEditors: linian
 * @Description: dev config
 */
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css 文件提取

module.exports = merge(common, {
  entry: {
    index: ['./src/index.js']
  }, // 入口文件
  mode: 'production',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
});