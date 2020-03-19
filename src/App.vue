<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link></router-link>
<!--            <a class="nav-link" href="/">Home</a>-->
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="'/cars'">Cars</router-link>
          </li>
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
