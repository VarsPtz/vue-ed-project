<template>
  <h1>Conter: {{ counter }}</h1>
</template>

<script>
    import {eventEmitter} from './main'

    export default {
        data () {
            return {
                counter: 0
            }
        },
        created() {
            eventEmitter.$on('counterUpdated', (num) => {
                this.counter += num
            })
        }
    }
</script>

<style scoped>

</style>