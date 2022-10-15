<!--
 * @Author: your name
 * @Date: 2021-12-03 22:13:04
 * @LastEditTime: 2021-12-06 09:12:07
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/ossImage.vue
-->
<template>
  <image :src="oss?`https://www.baidu.com/${src}`:`../static/${src}`" :mode="mode" :style="style" />
</template>
<script>
export default {
  props:{
    src:{
      type:String,
      
    },
    oss:{
      type:Boolean,
      
      default:false
    },
    mode:{
      type:String,
      default:"widthFix"

    },
    style:{
      type:String
    }
  }
}
</script>

<style>

</style>