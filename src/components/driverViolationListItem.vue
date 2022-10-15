<!--
 * @Author: your name
 * @Date: 2021-12-06 14:29:42
 * @LastEditTime: 2021-12-08 19:16:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/carListItem.vue
-->
<template>
  <view class="car-fault-list-item-box">
    <view class="item-list">
      <text class="title">违规类型</text>
      <text class="context" v-if="itemData.type===1">超时</text>
      <text class="context" v-elss>超速</text>
    </view>
     <view class="item-list">
      <text class="title">预警值</text>
      <text class="context">{{itemData.alarmValue}}</text>
    </view>
     <view class="item-list">
      <text class="title">违规操作</text>
      <text class="context">{{itemData.violationDesc}}</text>
    </view>
     <view class="item-list">
      <text class="title">上报时间</text>
      <text class="context">{{itemData.reportTime}}</text>
    </view>
  </view>
</template>

<script>
export default {
  props:{
    itemData:{
      type:Object,
      default:{}
    }
  }
};
</script>

<style lang="scss">
.car-fault-list-item-box {
  min-height: 100px;
  background: #0d1e5e;
  border-radius: 5px;
  margin-bottom: 16px;
  padding: 16px;
  .item-list {
    line-height: 64upx;
    .title {
      font-weight: 500;
      color: #ffffff;
      font-size: 24upx;
      vertical-align: top;
    }
    .context{
      font-size: 12px;
      color: #ccc;
      float: right;
      vertical-align: top;

    }
  }
}
</style>
