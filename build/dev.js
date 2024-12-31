/*
 * @Author: linian
 * @Date: 2024-12-06 10:56:01
 * @LastEditTime: 2024-12-13 19:44:22
 * @LastEditors: linian
 * @Description: 
 */
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.dev.js');
const compiler = webpack(config);
const open = require('open');

// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000,
}));

// 将文件 serve 到 port 3000。
app.listen(8080, function () {
  console.log('Example app listening on port 8080!\n');
  open("http://localhost:8080"); // 打开浏览器
});