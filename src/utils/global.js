/*
 * @Author: your name
 * @Date: 2021-12-09 14:08:19
 * @LastEditTime: 2021-12-14 10:46:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/utils/global.js
 */
import { getStationList } from "../server/navigation";
import {getDriverTruckList} from "../server/home";

import { useStore } from "vuex";
// 获取站点信息
export const getStationListFn = async () => {
  // debugger
  const store = useStore()
  let stationList= store.getters.getStationList;
  
  if(!stationList.length){
    try{
     const res = await getStationList();
     if(res){
      res.map(item=>{
        item.id = Number(item.id)
        item.iconPath = "../../../static/location.png";
        item.latitude = Number(item.latitude);
        item.longitude = Number(item.longitude);
        item.width=20
        item.height=24
      })
      store.dispatch('global/SetStationList',res)
      return res
     }
    }catch(e){
      console.log('error',e)
      return []
    }
    // getStationList()
    // .then(res=>{
    //   res.map(item=>{
    //     item.iconPath = "../../../static/location.png";
    //     item.latitude = Number(item.latitude);
    //     item.longitude = Number(item.longitude);
    //   })
    //   console.log("'global/SetStationList'",res)
    //   store.dispatch('global/SetStationList',res)
    //   return res
    // })
    // .catch((err) => {
    //   console.error(err);
    //   return false
    // });
  }else{
// setTimeout(()=>{
//   store.dispatch('global/SetStationList',[222,333,444])

// },3000)
    return stationList
  }
 
};
    // 查询司机名下的所有车辆

export const getDriverTruckListFn = async (driverId) => {
  const store = useStore()
 
  try{
    const res = await getDriverTruckList(driverId);
    if(res){
      store.dispatch("user/setDriverTruckList", res);
      // 设置默认选中

      if(res[0]){
        store.dispatch("user/setSelectDriverTruck", res[0]);
      }
      return res
    }
  }catch(e){
    console.log('error',e)
    return []
  }
}