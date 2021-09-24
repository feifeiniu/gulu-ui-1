<demo>
常规使用
</demo>

<template>
  <div>
    <input type="radio" v-bind:checked="message" />
  </div>
</template>

<script lang="ts">
export default {
  setup(){
    return {
      message:false,
    }
  }
}
</script>
