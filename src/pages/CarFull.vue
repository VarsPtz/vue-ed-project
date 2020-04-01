<template>
  <div>
    <h4>Car name: {{ $route.query.name }}</h4>
    <h5>Car year: {{ $route.query.year }}</h5>
    <h5>Cost: {{ cost }}$</h5>

    <div class="scroll"></div>

    <h6 id="scroll">Hello from the bottom</h6>

    <div class="scroll"></div>
  </div>

</template>

<script>
    export default {
      computed: {
        cost () {
          return this.$route.query.cost
        }
      }
    }
</script>

<style scoped>
  .scroll {
    width: 100px;
    height: 1000px;
    background-color: #cccccc;
  }
</style>
