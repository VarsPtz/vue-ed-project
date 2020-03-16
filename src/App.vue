<template>
  <div class="container">
    <form class="pt-3">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          class="form-control"
          :class="{'is-invalid': $v.email.$error, 'is-valid': !$v.email.$error && $v.email.$dirty}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
      </div>

<!--      <pre>-->
<!--        {{ $v.email }}-->
<!--      </pre>-->
    </form>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'

  export default {

    data() {
      return {
        email: ''
      }
    },
    validations: {
      email: {
        // required: required - тоже что и required
        required,
        email
      }
    }
}

</script>

<style scoped>

</style>
