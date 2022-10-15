/*
 * @Author: your name
 * @Date: 2021-12-09 18:26:04
 * @LastEditTime: 2021-12-09 19:20:43
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/server/carTrail.js
 */
import request from '../utils/request'
export const getCarMapData = (data) =>
  request({
    // url: "/api/bootybay-auth/oauth/token",
    url: '/bootybay-plateform/mini/vehicle-map-data',
    method: 'GET',
  })
 
  export const getVehicleHistoryTrack = (data) =>
  request({
    // url: "/api/bootybay-auth/oauth/token",
    url: '/bootybay-plateform/mini/vehicle-history-track',
    method: 'GET',
    data:data
  })
 
  