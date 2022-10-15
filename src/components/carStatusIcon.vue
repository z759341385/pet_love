<!--
 * @Author: your name
 * @Date: 2021-12-14 08:39:29
 * @LastEditTime: 2021-12-14 10:11:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-driver-weixin/src/components/carStatusIcon.vue
-->
<template>
  <view class="car-status-box">
     <image
        v-if="status==='启动'"
        src="../static/car-status-on.png"
        mode="widthFix"
        class="car-status-icon"
      />
      <!-- 车辆停止 -->
      <image
        v-else-if="status==='熄火'"
        src="../static/car-status-on.png"
        mode="widthFix"
        class="car-status-icon"
      />
      <!-- 车辆故障 -->
      <image
        v-else
        src="../static/car-status-wrong.png"
        mode="widthFix"
        class="car-status-icon"
      />
  </view>
</template>

<script>
export default {
  props:{
    status:{
      type:String,
      default:""
    }
  }
}
</script>

<style lang="scss">
.car-status-box{
  display: inline-block;
  .car-status-icon{
    width: 26px;
    height: 14px;
    margin-right: 8upx;
    vertical-align: middle;
  }
}
</style>