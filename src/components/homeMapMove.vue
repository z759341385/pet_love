<!--
 * @Author: your name
 * @Date: 2021-12-03 08:36:46
 * @LastEditTime: 2021-12-03 11:10:52
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
      :markers="covers"
      :scale="8"
      @markertap="clickTap"
      :polyline="polyline"
      :enable-rotate='true'
    ></map>
    <button @click="carMove">动起来</button>
  </view>
</template>

<script>
import { toRefs, reactive, onMounted } from "vue";
import util from "../utils/util";
import gps from "../utils/data";
import { onReady, onLoad } from "@dcloudio/uni-app";
const coors = [
  116.308258, 39.983701, 0, 192, 17, 908, 0, 0, -179, 6, 0, -729, -26, -488, -8,
  -708, 44, -399, 0, 0, -1051, -27, -1140, -55, 0, 0, -188, -48, 89, -1335, 80,
  -887, 0, -185, 62, -653, 170, -2767, 44, -688, 8, -165, 8, -68, 98, -1032,
  116, -715, 35, -413, 71, -461, 161, -1349, 98, -1197, 0, -82, -17, -137, 0, 0,
  -116, -240, -44, -165, 98, -220, 62, -206, 116, -826, 233, -1962, 134, -736,
  44, -199, 637, -3311, 17, -179, 17, -963, 35, -296, 80, -358, 314, -1163, 359,
  -1528, 197, -964, 107, -716, 80, -1074, 35, -833, 179, -2974, 17, -282, 0, 0,
  242, -495, 233, -3002, 26, -826, 0, -495, 8, -454, 26, -792, 89, -1646, 53,
  -1921, -26, -2541, 8, -571, 26, -516, 44, -2906, -8, -1770, 17, -1790, -8,
  -7997, 35, -2053, -80, -2996, 17, -744, 44, -881, 44, -1343, 26, -2494, -17,
  -358, 35, -3286, -8, -509, 8, -2639, 17, -468, -35, -1219, 8, -551, 8, -1081,
  0, -289, 0, -96, 8, -3156, 0, 0, -125, -186, -8, -937, -8, -1288, 0, 0, -62,
  -192, -26, -41, -53, -27, -853, -13, -206, -6, -898, 34, -80, 34, -71, 55,
  -26, 48, 0, 186, 35, 55, 71, 48, 206, 82, 17, 34, 1742, 6, 1688, -6, 2560, 6,
  0, 0, 80, -82, 71, -6, 700, -62, 1060, 20, 3377, 6,
];
const formatPolyline = (polyline) => {
  const coors = polyline,
    pl = [];
  //坐标解压（返回的点串坐标，通过前向差分进行压缩）
  const kr = 1000000;
  for (let i = 2; i < coors.length; i++) {
    coors[i] = Number(coors[i - 2]) + Number(coors[i]) / kr;
  }
  //将解压后的坐标放入点串数组pl中
  for (let i = 0; i < coors.length; i += 2) {
    pl.push({ latitude: coors[i + 1], longitude: coors[i] });
  }
  return pl;
};
const points = formatPolyline(coors);
export default {
  data() {
    return {
      id: 0, // 使用 marker点击事件 需要填写id
      title: "map",
      latitude: 39.909,
      longitude: 116.39742,
      mapCtx: null,
      points: points,
      covers: [
        // 轨迹车辆
        {
          id: 11,
          latitude: points[0].latitude,
          longitude: points[0].longitude,
          width: 24,
          height: 30,
          anchor: {
            x: 0.5,
            y: 0.5,
          },
          iconPath: "../../../static/car.png",
        },
      ],
      // 轨迹路线
      polyline: [
        {
          points: points,
          width: 6,
          color: "#05B473",
          arrowLine: true,
        },
      ],
    };
  },
  onReady() {
    this.mapCtx = uni.createMapContext("map", this);
    //  this.mapCtx.translateMarker({
    //    autoRotate: true
    //  })
  },
  methods: {
    carMove() {
      // this.mapCtx = wx.createMapContext("map");
      const version = wx.getSystemInfoSync().SDKVersion;
      if (util.compareVersion(version, "2.13.0") < 0) {
        // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
        wx.showToast({
          title:
            "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。",
          icon: "none",
        });
        return;
      }
      // TODO记得禁止播放按钮
      // this.mapCtx.openMapApp()
      // 移动
      this.mapCtx.moveAlong({
        markerId: 11,
        path: points,
        autoRotate: true,
        // duration: (moveAlongData.length - 1) * 1000,
        duration: 10000,
      });
      console.log("mapCtx", this.mapCtx, this.points);
    },

    // 处理车辆gps数据
    formatGPSData(gps) {
      const data = gps.map((item) => {
        const itemArr = item.split(",");
        return {
          latitude: itemArr[1],
          longitude: itemArr[0],
          index: itemArr[8],
        };
      });
      return data;
    },
  },
};
</script>

<style>
.home-map-box {
  width: 100%;
  height: 300upx;
}
</style>
