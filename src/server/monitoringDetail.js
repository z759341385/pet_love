/*
 * @Author: your name
 * @Date: 2021-12-07 21:29:21
 * @LastEditTime: 2021-12-09 20:12:51
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/server/home.js
 */
// 
import request from '../utils/request'

// 监控中心-整车监控 -车辆详情
export const getTruckDetail = (data) =>
  request({
    url: '/bootybay-plateform/mini/truckDetail',
    method: 'GET',
    data:data
  })
  
 //监控中心-车辆详情-车联故障列表 
export const getTruckFaultList = (data) =>
  request({
    url: '/bootybay-plateform/mini/truckFaultList',
    method: 'GET',
    data:data
  })
  
 //监控中心-车辆详情-驾驶员违规列表 
 export const getViolationAlarmList = (data) =>
 request({
   url: '/bootybay-plateform/mini/violationAlarmList',
   method: 'GET',
   data:data
 })
 // 监控中心-车辆详情-30天能耗
 export const getTruckEnergy = (data) =>
 request({
   url: '/bootybay-plateform/mini/truck-energy',
   method: 'GET',
   data:data
 })
 // 警报中心-氢站报警分页列表
 export const getStationAlarmPage = (data) =>
 request({
   url: '/bootybay-plateform/mini/station-alarm-pge',
   method: 'GET',
   data:data
 })
 
 // 监控中心-氢站监控详情
 export const getStationDetail = (data) =>
 request({
   url: '/bootybay-plateform/mini/stationDetail',
   method: 'GET',
   data:data
 })
 
