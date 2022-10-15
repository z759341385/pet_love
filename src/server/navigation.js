/*
 * @Author: your name
 * @Date: 2021-12-07 21:29:21
 * @LastEditTime: 2021-12-15 16:34:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/server/home.js
 */
// 
import request from '../utils/request'

// 监控中心-整车监控 -车辆分页列表
export const getAlarmList = (data) =>
  request({
    url: '/bootybay-plateform/mini/truck-page',
    method: 'GET',
    data:data
  })
  // 车辆轨迹-查询氢站列表-包含经纬度和地址
  export const getStationList = (stationName) =>
  request({
    url: '/bootybay-plateform/mini/stationList',
    method: 'GET',
    data:{
      stationName:stationName
    }

  })
  

  