<demo>
支持禁用
</demo>
<template>
  <div>
    <input placeholder="禁用" v-model="error" disabled/>  <span>{{error}}</span>
  </div>
</template>

<script lang="ts">
export default {
  setup(){
    return {
     error:''
    }
  }
}
</script>
<style lang="scss" scoped>
input{
  max-width:160px;
  height:40px;
  border:1px solid #dbdbdb;
  outline:none;
  text-indent:10px;
  border-radius: 4px;
}
</style>