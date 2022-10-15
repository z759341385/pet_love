<!--
 * @Author: your name
 * @Date: 2021-12-02 13:07:45
 * @LastEditTime: 2021-12-02 20:12:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/components/list.vue
-->
<template>
  <view
    >我是列表页
    <scroll-view
      class="list-box"
      :loading="loading"
      scroll-y="true"
      @scrolltolower="onRefresh"
    >
      <ul>
        <li v-for="(index, item) in tableData" :key="index">
          {{ index }}{{ item }}
        </li>
      </ul>
    </scroll-view>
  </view>
</template>

<script>
import { reactive, toRefs ,defineComponent} from "vue";
export default defineComponent ({
  props: {},
  setup(props,{emit}) {
    const cc = "1111"
    const data = reactive({
      tableData: [],
      page: 1,
      size: 30,
      loading: true,
    });

    // 初始化列表数据
    const initFun = () => {
      data.loading = true;
      console.log("列表初始化方法")
    };
 
    // 获取更多列表数据
    const onRefresh = () => {
      console.log("refresherrefresh");
      data.loading = true;
      data.page++;
      data.tableData.length = data.page * data.size;
      uni.showLoading({
        mask: true,
        title: "数据加载中",
      });
      setTimeout(() => {
        uni.hideLoading();
      }, 1000);
      emit('search')
    };
    // 假数据
    for(let i = 0 ; i <100;i++){
      data.tableData.push(i)
    }

    const refData = toRefs(data);
    return {
      onRefresh,
      initFun,
      ...refData,
    };
  },

});
</script>

<style  >
.list-box {
  height: calc(100vh - 100upx);
}
</style>
