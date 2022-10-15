<!--
 * @Author: your name
 * @Date: 2021-12-03 08:36:46
 * @LastEditTime: 2021-12-09 20:04:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/components/homeMap.vue
-->

<template>
  <view>
    <map
      class="home-map-box"
      id="map"
      :latitude="latitude"
      :longitude="longitude"
      :markers="hyInfoList"
      :scale="11"
      @markertap="clickTap"
      :polyline="polyline"
    ></map>
  </view>
</template>

<script>
import { toRefs, reactive, onMounted, computed } from "vue";

export default {
  props: {
    hyInfoList: {
      type: Array,
      default: [],
    },
  },
  setup(props, context) {
    const data = reactive({
      id: 0, // 使用 marker点击事件 需要填写id
      title: "map",
      // latitude: 39.909,
      // longitude: 116.39742,
        latitude:36.166174,
      longitude: 120.432288,
     
      coversData: [
        {
          id: 1111,
          latitude: 39.909,
          longitude: 116.39742,
          iconPath: "../../../static/location.png",
          clickable: true,
        },
        {
          id: 22222,
          latitude: 39.9,
          longitude: 116.39,
          iconPath: "../../../static/location.png",
          clickable: true,
        },
      ],
    });
    const refData = toRefs(data);
    // 点击图标出现弹窗
    const clickTap = (event, id) => {
      console.log("event", event, id, context);
      let {markerId} = event
      context.emit("dialogShow",markerId);
    };

    return {
      ...refData,
      // coversData,
      clickTap,
    };
  },
};
</script>

<style>
.home-map-box {
  width: 100%;
  height: 470upx;
  border-radius: 5px;
  border: 1px solid #3c7cff;
  overflow: hidden;
}
</style>
