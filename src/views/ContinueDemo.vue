<template>
  <div class="continueUI">
    <h2><strong>未完待续...</strong></h2><br>
    <hr>
    <span class="mes">{{mesage}}</span>
  </div>
</template>
<script lang="ts">

export default {
data(){
   return {mesage: "我会持续更新我的 UI 组件"}
}
}
</script>
<style scoped>
.mes{
 display:inline-block ;
 padding-top: 10px;
}
</style>