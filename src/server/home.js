/*
 * @Author: your name
 * @Date: 2021-12-07 21:29:21
 * @LastEditTime: 2021-12-14 10:01:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/server/home.js
 */
// 
import request from '../utils/request'

// 司机端-数据报表-查询司机名下的所有车辆
export const getDriverTruckList = (driverId) =>
  request({
    // url: "/api/bootybay-auth/oauth/token",
    url: '/bootybay-plateform/mini/driverTruckList',
    method: 'GET',
    data:{
      driverId
    }
    // headers: {
    //   "Tenant-Id": '000000'
    // },
  })



// 监控中心-整车监控 -车辆详情
export const getTruckDetail = (data) =>
  request({
    url: '/bootybay-plateform/mini/truckDetail',
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

// 监控中心-车辆详情-车联故障列表  
export const getTruckFaultList = (data) =>
  request({
    url: '/bootybay-plateform/mini/truckFaultList',
    method: 'GET',
    data:data
  })
  
  // 首页-综合统计(车辆数-轮播-氢站分布)
  // export const getHomeData = () =>
  //   request({
  //     // url: "/api/bootybay-auth/oauth/token",
  //     url: '/bootybay-plateform/mini/home-data',
  //     method: 'GET',
  //     // headers: {
  //     //   "Tenant-Id": '000000'
  //     // },
  // })
  //  // 首页-能耗趋势
  // export const getEnergyConsumptionAnalysis = () =>
  //   request({
  //     // url: "/api/bootybay-auth/oauth/token",
  //     url: '/bootybay-plateform/mini/energy-consumption-analysis',
  //     method: 'GET',
  //     // headers: {
  //     //   "Tenant-Id": '000000'
  //     // },
  // })