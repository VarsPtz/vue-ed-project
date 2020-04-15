<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Car name</label>
      <input type="text" id="name" class="form-control" v-model.trim="carName">
    </div>

    <div class="form-group">
      <label for="year">Car year</label>
      <input type="text" id="year" class="form-control" v-model.number="carYear">
    </div>

    <button class="btn btn-success" @click="createCar">Create car</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        carName: 'Ford',
        carYear: 2018
      }
    },
    methods: {
      createCar () {
        // console.log('Create car')
        const car = {
          name: this.carName,
          year: this.carYear
        }

        this.$http.post('http://localhost:3000/cars', car)
         .then(response => {
           // console.log(response)
           return response.json()
         })
         .then(newCar => {
           console.log(newCar)
         })
      }
    }
  }
</script>
