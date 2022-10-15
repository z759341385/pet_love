<!--
 * @Author: your name
 * @Date: 2021-12-02 18:17:10
 * @LastEditTime: 2021-12-02 18:18:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/components/a.vue
-->
<template>
  <view>aaaa</view>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  name: 'HelloWorld',

setup(){
       const data = reactive({
      tableData: [],
      page: 1,
      size: 30,
      loading: true,
    });
    const refData = toRefs(data);
    return {
  
      ...refData,
    };

  }
}
</script>

<style>

</style>