<!--
 * @ModelName: 氢站监控地图模块
 * @Author: your name
 * @Date: 2021-12-03 08:36:46
 * @LastEditTime: 2021-12-10 10:43:35
 * @FilePath: /my-vue3-project/src/components/homeMap.vue
-->

<template>
  <view >
    <!-- {{JSON.stringify(stationList)}}
    <view v-for="item in stationList" :key="item">{{item}}</view> -->
    <map
      class="home-map-box"
      id="siteMonitoringMap"  
      :latitude="latitude"
      :longitude="longitude"
      :markers="stationList"
      :scale="11"
      @markertap="clickTap"
      :polyline="polyline"
    ></map>
  </view>
</template>

<script>
import { toRefs, reactive, onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
   setup(props,context) {
     const store= useStore()
    const data = reactive({
      id: 0, // 使用 marker点击事件 需要填写id
      title: "map",
      latitude:36.166174,
      longitude: 120.432288,
      stationList:[],
    });
    
    data.stationList=computed(()=>{
      // return mapGetters(["getStationList"])
      //   console.log(123123123213,store.getters.getStationList)
      return store.state.global.stationList
    })
    const refData = toRefs(data);
    // 点击图标出现弹窗
    const clickTap = (event, id) => {
      data.stationList.map(item=>{
        if(item.id===event.markerId){
          store.dispatch('global/SetStationDetail',item)
        }
      })
      context.emit("dialogShow")
      context.emit('clickSite',id)
    };
  
    return {
      ...refData,
      // stationList,
      clickTap,
    };
  },
};
</script>

<style>
.home-map-box {
  width: 100%;
  height: 100vh;
}
</style>
