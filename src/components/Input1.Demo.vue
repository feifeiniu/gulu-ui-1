<demo>
常规使用
</demo>

<template>
  <div>
    <input placeholder="请输入内容" v-model="text"/>  <span>{{text}}</span>
  </div>
</template>

<script lang="ts">
export default {
  setup(){
    return {
      text:'',
    }
  }
}
</script>
<style lang='scss' scoped>
input{
  max-width:160px;
  height:40px;
  border:1px solid #dbdbdb;
  outline:none;
  text-indent:10px;
  border-radius: 4px;
}
</style>