/*
 * @Author: linian
 * @Date: 2024-12-02 20:32:20
 * @LastEditTime: 2024-12-23 18:25:13
 * @LastEditors: linian
 * @Description: 
 */
import './styles.css';
import "./iconfont.css";
import img from "./imgs/IMG_0467.JPG";
// import printMe from './print';
import _ from "lodash";
import test from './text';
test();
// printMe();
// import 'babel-polyfill';

_.assign();

document.getElementById('app').innerHTML = `
  <h1>here</h1>
  <p class="test">Welcome to your new project!</p>
  <p class="test">Welcome to your new project!</p>
  <p>Welcome to your new project!</p>
  <p>Welcome to your new project!</p>
  <span class="iconfont icon-xuehua"></span>
  <input type='file'/>
`;