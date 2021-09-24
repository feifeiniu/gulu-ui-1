<demo>
不同支持类型使用
</demo>
<template>
  <div>
    <input placeholder="文本类型" v-model="text" type="text"/>  <span>{{text}}</span>
    <input placeholder="密码类型" v-model="password" type="password"/>  <span>{{password}}</span>
  </div>
</template>

<script lang="ts">
export default {
  setup(){
    return {
      text:'',
      password:''
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