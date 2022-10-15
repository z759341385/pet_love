/*
 * @Author: your name
 * @Date: 2021-12-13 14:36:19
 * @LastEditTime: 2021-12-13 14:37:24
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-driver-weixin/src/server/mine.js
 */

import request from '../utils/request'
export const getDriverDetail = (id) =>
  request({
    url: '/bootybay-plateform/mini/driver-detail',
    method: 'GET',
    data:{
      id
    }
})  