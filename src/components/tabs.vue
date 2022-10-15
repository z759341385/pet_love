<!--
 * @Author: your name
 * @Date: 2021-12-06 10:15:21
 * @LastEditTime: 2021-12-10 11:26:33
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/tabs.vue
-->
<template>
  <view class="top-tab-box">
    <view
      class="tab-item"
      @click="selectedTab(item)"
      v-for="item in tabList"
      :key="item.id"
      :class="tabsAction === item.id ? 'action' : ''"
      >{{ item.title }}</view
    >
  </view>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, onMounted,computed } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    tabList: {
      type:Array,
    default: [],
    },
  },
  setup(props,context) {
    const store = useStore()

    onMounted(()=>{
      console.log("onMounted")
    })
    const data = reactive({
      tabsAction: 1,
    });
    data.tabsAction=computed(()=>{
      return store.state.global.monitoringCenterTabsIndex||1
    })
    const selectedTab = (item) => {
      let { id } = item;
      data.tabsAction = id;
      context.emit('selectChange',item)
    };
    const refData = toRefs(data);
    return {
      ...refData,
      selectedTab,
    };
  },
};
</script>

<style lang="scss">
.top-tab-box {
  display: flex;
  // width: 112upx;
  justify-content: space-around;
  .tab-item {
    width: 160upx;
    color: #fff;
    text-align: center;
    &.action {
      // position: relative;
      color: #17eeff;
      &::after {
        content: "";
        display: block;
        margin:7px auto 0 auto;
        height: 4upx;
        width: 60upx;
        background: #17eeff;
        border-radius: 1px;
        // position: absolute;
      }
    }
  }
}
</style>
