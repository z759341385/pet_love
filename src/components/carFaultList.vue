<!--
 * @ModelName: 故障信息列表
 * @Author: your name
 * @Date: 2021-12-03 08:36:46
 * @LastEditTime: 2021-12-15 13:49:17
 * @FilePath: /my-vue3-project/src/components/homeMap.vue
-->
<template>
  <view>
    <scroll-view
      class="list-box"
      :loading="loading"
      scroll-y="true"
      @scrolltolower="onRefresh('change')"
    >
      <view>
        <view v-for="item in listData.records" :key="item.id">
          <CarFaultListItem :itemData="item" />
        </view>
        <NullData v-if="listData.records.length===0||!listData.records" /> 
        <ListDown v-if="listData.records.length&&listData.current===listData.pages"  /> 
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { reactive, toRefs, defineComponent } from "vue";
import CarFaultListItem from "./carFaultListItem.vue";
import NullData from './nullData.vue';
import ListDown from './listDown.vue';

export default defineComponent({
  components: { CarFaultListItem,NullData,ListDown },
  props: {
    listData: {
      type: Object,
      default: {},
    },
  },
  setup(props, { emit }) {
    const data = reactive({
      loading: true,
    });

    // 初始化列表数据
    const initFun = () => {
      data.loading = true;
      // console.log("列表初始化方法");
    };

    // 获取更多列表数据
    const onRefresh = (status) => {
      let { current, pages } = props.listData;
      // 如果当前是最后一页
      if (current === pages) {
        return;
      }
      // console.log("refresherrefresh");
      data.loading = true;
      uni.showLoading({
        mask: true,
        title: "数据加载中",
      });
      setTimeout(() => {
        uni.hideLoading();
      }, 1000);
      emit("search", status);
    };
   
    const refData = toRefs(data);
    return {
      onRefresh,
      initFun,
      ...refData,
    };
  },
});
</script>

<style>
.list-box {
  height: 350px;
  padding-top: 32upx;
}
</style>
