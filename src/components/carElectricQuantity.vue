<!--
 * @Author: your name
 * @Date: 2021-12-14 08:39:29
 * @LastEditTime: 2021-12-14 10:11:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-driver-weixin/src/components/carStatusIcon.vue
-->
<template>
  <view class="car-status-box">
     <!-- 电量100% -->
      <image
        v-if="number===100"
        src="../static/chongdian-100.png"
        mode="widthFix"
        class="car-status-icon"

      />
       <image
       v-else-if="number<100&&number>=30"
        src="../static/chongdian-30.png"
        mode="widthFix"
        class="car-status-icon"
      />
      <!-- 电量低于20% -->
      
      <image
      v-lese
        src="../static/chongdian-20.png"
        mode="widthFix"
        class="car-status-icon"
      />
  </view>
</template>

<script>
export default {
  props:{
    number:{
      type:Number,
      default:0
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
   margin-left: 24upx;
    margin-right: 8upx;
    vertical-align: middle;
  }
}
</style>