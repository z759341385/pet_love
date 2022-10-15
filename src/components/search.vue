 
<!--
 * @Author: your name
 * @Date: 2021-12-06 10:24:41
 * @LastEditTime: 2021-12-08 17:56:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/search.vue
-->
<template>
  <view class="top-search-box">
      <view class="top-search"  v-if="disabled">
      <icon type="search" class="search-icon" size="16" color="#586a92" />
      <text class="search-text">请输入车牌号码</text>
    </view>
    <!-- <icon type="search" class="search-icon" size="16" color="#586a92" /> -->

    <uni-easyinput
      v-else
      class="top-search"
      type="text"
      confirmType="搜索"
      prefixIcon="search"
      v-model="value"
      placeholderStyle="color:#586A92"
      :styles="inputStyle"
      placeholder="请输入车牌号码"
      @confirm="search"

    ></uni-easyinput>
    <!-- <input prefixIcon="search" class="search-text" placeholder="请输入车牌号码">  -->
  </view>
</template>

<script>
import { defineComponent, reactive, toRefs, ref, onMounted } from "vue";

export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
   
    const data = reactive({
      value: "",
       placeholderStyle:{
          color:'#586A92'
        },
      inputStyle: { 
        borderColor: "transparent", 
        color: "#fff" ,
        disableColor:"#586a92",
        },
       
    });
    const search = () =>{
      context.emit('searchChange',data.value)
    }
    const refData = toRefs(data);
    return {
      search,
      ...refData,
    };
  },
};
</script>

<style lang="scss">
// 顶部搜索
.top-search-box {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  
  .top-search {
  height: 80upx;

  text-align: left;
  color: #fff;
  font-size: 28upx;
  line-height: 80upx;
  position: relative;
  // border-color: transparent;
  //
 
  
  .search-text {
    padding-left: 80upx;
    vertical-align: middle;
    line-height: 80upx;
    color: #586A92;
  }
  .search-icon {
    color: #586a92;
    position: absolute;
    top: 19upx;
    left: 32upx;
  }
}
}

</style>
