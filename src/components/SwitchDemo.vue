<template>
  <div class="demo1">
    <h3>示例1</h3> <hr>
    <Switch v-model:value="bool" />
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import { ref } from 'vue'
export default {
  components: {Switch},
  setup(){
    const bool = ref(false)
    return {bool}
}
}
</script>
<style scoped>
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
</style>