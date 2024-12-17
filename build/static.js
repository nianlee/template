/*
 * @Author: linian
 * @Date: 2024-12-06 10:56:01
 * @LastEditTime: 2024-12-11 17:19:18
 * @LastEditors: linian
 * @Description: 
 */
const express = require('express');

const app = express();

app.use(express.static("./dist"));

// 将文件 serve 到 port 8081
app.listen(8081, function () {
  console.log('Example app listening on port 8081!\n');
});