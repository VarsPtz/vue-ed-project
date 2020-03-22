<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <router-link tag="li" class="nav-item" to="/" exact active-class="active">
            <a class="nav-link">Home</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/cars" active-class="active">
            <a class="nav-link">Cars</a>
          </router-link>

          <router-link tag="li" class="nav-item" to="/car/3" active-class="active">
            <a class="nav-link">Cars 3</a>
          </router-link>
          <router-link tag="li" class="nav-item" to="/car/4" active-class="active">
            <a class="nav-link">Cars 4</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

  export default {

    data() {
      return {
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      onSubmit () {
        console.log('Email', this.email)
        console.log('Password', this.password)
      }
    },
    validations: {
      email: {
        required,
        email,
        uniqEmail: function (newEmail) {
          if (newEmail === '') return true
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const value = newEmail !== 'test@mail.ru'
              resolve(value)
            }, 1000)
          })
        }
      },
      password: {
        minLength: minLength(6)
      },
      confirmPassword: {
        sameAs: sameAs((vue) => {
          return vue.password
        })
      }
    }
}

</script>

<style scoped>

</style>
