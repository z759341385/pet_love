<!--
 * @Author: your name
 * @Date: 2021-12-07 10:44:43
 * @LastEditTime: 2021-12-10 11:08:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/modelTitle.vue
-->
<template>
  <view class="model-title-box">
    <image :src="icon" class="model-title-icon" mode="widthFix"  v-if="icon"/>
    <view class="title-text">{{ title }}</view>
  </view>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.model-title-box {
  height: 56upx;
  background: url(../static/detail-title-bg.png) no-repeat bottom left;
  background-size: 100% 38upx;
  margin: 48upx 0;
  text-align: center;
  .model-title-icon {
    width: 37px;
    height: 26px;
    vertical-align: middle;
    padding-right: 14upx;

  }
  .title-text {
    font-size: 32upx;
    font-weight: 500;
    color: #ffffff;
    display: inline-block;
    vertical-align: middle;
  }
  .more-btn {
    font-size: 24upx;
    font-weight: 400;
    color: #ffffff;
    display: inline-block;
    float: right;
  }
}
</style>
