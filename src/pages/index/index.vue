<!--
 * @ModelName: 氢站监控详情
 * @Author: your name
 * @Date: 2021-12-03 08:36:46
 * @LastEditTime: 2022-10-12 14:54:06
 * @FilePath: /my-vue3-project/src/components/homeMap.vue
-->
<template>
  <view class="site-monitoring-detail">
    <view class="page-top-update-item">首页</view>
  </view>
</template>

<script>
export default {
  components: {},

  setup(props, context) {
    const data = reactive({})

    const refData = toRefs(data)

    return {
      ...refData,
    }
  },
}
</script>

<style lang="scss">
.site-monitoring-detail {
  padding: 0 16px;
  padding-bottom: 40px;
  .page-top-update-item {
    font-size: 10px;
    color: rgba($color: #000000, $alpha: 0.7);
    text-align: center;
    padding: 8px;
  }
}
</style>
