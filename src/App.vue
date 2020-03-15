<template>
  <div>
    <h2>Form inputs</h2>

    <app-onoff v-model="switchButton"></app-onoff>

    <div>
      <h3 v-if="switchButton">Component is enabled</h3>
      <h3 v-else="switchButton">Component is disabled</h3>
    </div>
  </div>
</template>

<script>

import Onoff from './Onoff.vue'

  export default {

    data() {
      return {
        switchButton: false
      }
  },
  components: {
    appOnoff: Onoff
  }
}

</script>

<style scoped>
  textarea {
    width: 400px;
    height: 200px;
  }

  p {
    white-space: pre;
  }
</style>
