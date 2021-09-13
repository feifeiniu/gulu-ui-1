<template>
<div class="demo1">
  <h3>基础用法-双向绑定</h3> <hr>
  <input placeholder="请输入内容" v-model="text"/>  <span>{{text}}</span>
</div>
<div class="demo2">
  <h3>支持的类型</h3> <hr>
  <input placeholder="文本类型" v-model="text1"/>  <span>{{text1}}</span>
  <input placeholder="密码类型" v-model="psssword" type="password"/>  <span>{{password}}</span>
</div>
<div class="demo3">
  <h3>支持禁用</h3> <hr>
  <input placeholder="禁用" v-model="error"/>  <span>{{error}}</span>
</div>
</template>
<script lang="ts">
export default ({
  name: 'InputDemo1',
 data(){
     return{ 
         text:'',
         text1:'',
         password:'',
         error:''
     } 
     } 
 })
</script>
<style lang="scss" scoped>
.demo1{
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.demo2{
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.demo3{
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>