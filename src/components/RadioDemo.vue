<template>
  <div class="demo1">
    <h3>单个单选框</h3> <hr>
  <input type="radio" v-bind:checked="message1">
  </div>
  <div class="demo2">
    <h3>多个单选框</h3> <hr>
  <input type="radio" value='选择了第一个' v-model="message2">
  <input type="radio" value='选择了第二个' v-model="message2">
  {{message2}}
  </div>
</template>
<script lang="ts">

export default {
 data(){
     return{
         message1:false,
         message2:''
     }
 }

}
</script>
<style scoped>
.demo1 {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
.demo2 {
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