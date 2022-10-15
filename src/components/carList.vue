<!--
 * @Author: your name
 * @Date: 2021-12-02 13:07:45
 * @LastEditTime: 2021-12-08 19:06:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/components/list.vue
-->
<template>
  <view>
    <scroll-view
      class="list-box"
      :loading="loading"
      scroll-y="true"
      :refresher-triggered="triggered"
      @scrolltolower="onRefresh('change')"
    
    >
      <view>
        <view v-for="item in tableData" :key="item.id">
          <CarListItem :carInfo="item" />
        </view>
        <NullData v-if="tableData.length===0" /> 
        <ListDown v-if="tableData.length&&pagesObj.current===pagesObj.pages"  /> 
      </view>
    </scroll-view>
  </view>
</template>

<script>
import { reactive, toRefs, defineComponent } from "vue";
import CarListItem from "./carListItem.vue";
import NullData from './nullData.vue'
import ListDown from './listDown.vue'

export default defineComponent({
  components: { CarListItem ,NullData,ListDown},
  props: {
    tableData:{
      type:Array,
      default:[]
    },
    pagesObj:{
      type:Object,
      default:{}
    },
  },
  setup(props, { emit }) {
    const cc = "1111";
    const data = reactive({
      // tableData: [],
      page: 1,
      size: 30,
      loading: true,
    });

    // 初始化列表数据
    const initFun = () => {
      data.loading = true;
      console.log("列表初始化方法");
    };

    // 获取更多列表数据
    const onRefresh = (status) => {
   
      let { current, pages } = props.pagesObj;
        // 如果当前是最后一页
        if (current === pages) {
          return;
        }
      console.log("refresherrefresh");
      data.loading = true;
      // data.page++;
      // data.tableData.length = data.page * data.size;
      uni.showLoading({
        mask: true,
        title: "数据加载中",
      });
      setTimeout(() => {
        uni.hideLoading();
      }, 1000);
      emit("pageChange",status);
    };
    // 假数据
    // for (let i = 0; i < 100; i++) {
    //   data.tableData.push(i);
    // }

    const refData = toRefs(data);
    return {
      onRefresh,
      initFun,
      ...refData,
    };
  },
});
</script>

<style lang="scss">
.list-box {
  height: calc(100vh - 100upx);
  padding-top: 32upx;
  .list-bottom{
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    
  }

}
</style>
