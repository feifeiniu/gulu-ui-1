<demo>
多个单选框
</demo>
<template>
  <div>
    <input type="radio" value='选择了第一个' v-model="message" />
    <input type="radio" value='选择了第二个' v-model="message" />
    {{message}}
  </div>
</template>

<script lang="ts">
export default {
  setup(){
    return {
      message:''
    }
  }
}
</script>