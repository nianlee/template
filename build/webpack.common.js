/*
 * @Author: linian
 * @Date: 2024-12-02 20:22:05
 * @LastEditTime: 2024-12-30 10:07:32
 * @LastEditors: linian
 * @Description: 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require("webpack");

module.exports = {
  output: {
    filename: '[name].[contenthash].bundle.js', // 输出文件名
    path: path.resolve(__dirname, '../dist'), // 输出路径
    publicPath: '/',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              {
                "useBuiltIns": "usage",
                "corejs": "3.22"
              }
            ],
          },
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html' // 模板文件
    }),
  ],
  optimization: {
    moduleIds: 'deterministic', // 模块id固定
    runtimeChunk: 'single', // 多个js入口，使用同一套运行时代码
    splitChunks: {
      cacheGroups: { // 将公共依赖库（比如react、lodash）提取到公共的vendors 里面
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};