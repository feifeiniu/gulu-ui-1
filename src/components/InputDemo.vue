<template>
  <div>
    <h1>Input 示例</h1>
    <Demo :component="Input1Demo" />
    <Demo :component="Input2Demo" />
    <Demo :component="Input3Demo" />
  </div>
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import Input1Demo from "./Input1.Demo.vue";
import Input2Demo from "./Input2.Demo.vue";
import Input3Demo from "./Input3.Demo.vue";

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Input1Demo,
      Input2Demo,
      Input3Demo,
    };
  },
};
</script>