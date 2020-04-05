<template>
  <div>
    <h1>Car id {{ id }}</h1>

    <button class="btn btn-sm btn-default mb-2" style="background: grey;" @click="goBackToCars">Back</button>
    <br>
    <router-link
      class="btn btn-info mb-2"
      tag="button"
      :to="{name: 'carFull', params: {id: id}, query: {name: 'Mazda', year: 2000, cost: 10000}, hash: '#scroll'}"
    >
      Full info
    </router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          //id: this.$router.currentRoute.params['id']
          id: this.$route.params['id']
        }
      },
      methods: {
        goBackToCars () {
          this.$router.push('/cars')
        }
      },

      watch: {
        $route (toR, fromR) {
          this.id = toR.params['id']
        }
      },
      beforeRouteLeave (to, fromR, next) {
        console.log('boforeRouterLeave')
        // next(false)

        if (window.confirm('Are you sure you want to leave?')) {
          next()
        } else {
          next(false)
        }
      }
    }
</script>

<style scoped>

</style>
