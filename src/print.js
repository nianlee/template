/*
 * @Author: linian
 * @Date: 2024-12-05 20:06:22
 * @LastEditTime: 2024-12-06 15:07:37
 * @LastEditors: linian
 * @Description: 
 */

import _ from "lodash";

export default function printMe() {
  console.log('I get called from print.js!');
  console.log('I get called from print.js!', _.VERSION);
  // consolee.log('I get called from print.js!');
}