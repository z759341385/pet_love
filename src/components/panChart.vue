<!--
 * @Author: your name
 * @Date: 2021-12-07 15:36:23
 * @LastEditTime: 2021-12-10 10:12:39
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/panChart.vue
-->
<template>
  <view class="pan-chart-model">
    <view class="pan-chart-model-box">
      <image src="../static/chart-pan.png" class="pan-chart-bg" />
      <view
        class="pan-chart-pointer-box"
        :style="{ transform: `rotate(${rotateNumber}deg)` }"
      >
        <image src="../static/pointer.png" class="pan-chart-pointer" />
      </view>
    </view>
    <view class="pan-chart-info">
      <view class="pan-chart-city">{{chartTitle}}</view>
      <view class="pan-chart-number">{{chartData}} KWH</view>
    </view>
  </view>
</template>

<script>
import { ref } from "vue";
export default {
  props:{
    chartData:{
      type:Number,
      default:0
    },
    chartTitle:{
      type:String,
      
    }
  },
  setup(props) {
    // const averageConsume = 11.8;
    const number = ((props.chartData / 25) * 180 + -90).toFixed(2);
    const rotateNumber = ref(number);
    console.log("rotateNumber", rotateNumber);
    return {
      rotateNumber,
    };
  },
};
</script>

<style lang="scss">
.pan-chart-model {
  position: relative;
  width: 122px;
  .pan-chart-info {
    position: absolute;
    bottom: -24px;
    left: 0;
    right: 0;
    margin: auto;
  }
  .pan-chart-city {
    font-weight: 500;
    color: #ffffff;
    font-size: 14px;

    text-align: center;
  }
  .pan-chart-number {
    font-weight: 500;
    color: #17eeff;
    font-size: 16px;
    text-align: center;
    padding-top: 6px;
  }
  .pan-chart-model-box {
    position: relative;
    .pan-chart-bg {
      width: 122px;
      height: 62px;
    }
    .pan-chart-pointer {
      width: 8px;
      height: 20px;
    }
    .pan-chart-pointer-box {
      height: 64px;
      width: 8px;
      position: absolute;
      display: inline-block;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 0;
      transform: rotate(-90deg);
      transform-origin: center bottom;
    }
  }
}
</style>
