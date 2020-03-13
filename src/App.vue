<template>
  <div>
    <h2>Form inputs</h2>
    <input type="text" v-model.lazy="name">
    <p>{{ name }}</p>
    <hr>
<!--    <textarea>{{ textarea }}</textarea>-->
    <textarea v-model="textarea"></textarea>
    <p>{{ textarea }}</p>
    <hr>
    <label>
      <input type="checkbox" value="instagram" v-model="social"> Instagram
    </label>

    <label>
      <input type="checkbox" value="vk" v-model="social"> Vk
    </label>

    <label>
      <input type="checkbox" value="facebook" v-model="social"> Facebook
    </label>

    <ul>
      <li v-for="s in social">{{ s }}</li>
    </ul>
    <hr>

    <label>
      <input type="radio" value="instagram" v-model="socialRadio"> Instagram
    </label>

    <label>
      <input type="radio" value="vk" v-model="socialRadio"> Vk
    </label>

    <label>
      <input type="radio" value="facebook" v-model="socialRadio"> Facebook
    </label>

    <p>{{ socialRadio }}</p>
    <hr>

<!--    <select>-->
<!--      <option-->
<!--        v-for="s in socialsList"-->
<!--        :selected="s == defaultSocial"-->
<!--      >{{ s }}</option>-->
<!--    </select>-->

    <select v-model="defaultSocialSelect">
      <option
        v-for="sel in socialsList"
      >{{ sel }}</option>
    </select>

    <p>{{ defaultSocialSelect }}</p>

    <hr>

    <input type="text" v-model.number="age">

    <p>{{ age }}</p>

  </div>
</template>

<script>

export default {

  data() {
      return {
        name: 'Initial state',
        textarea: 'I am initial text',
        social: ['vk'],
        socialRadio: 'facebook',
        defaultSocial: 'facebook',
        defaultSocialSelect: 'instagram',
        socialsList: ['instagram', 'vk', 'facebook'],
        age: 20
      }
  },
  watch: {
    age (value) {
      console.log(value)
    }
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
