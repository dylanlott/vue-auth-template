<template>
  <v-container fluid="fluid">
    <v-layout row wrap>
      <v-flex xs12>
        <h1>Sign up</h1>
        <SignUpForm></SignUpForm>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import SignUpForm from '../components/SignUpForm.vue'
  export default {
    name: 'signup',
    data () {
      return {
      }
    },
    components: { SignUpForm }
  }
</script>

<style lang="stylus">
.tagline
  color: #fff

.heading
  text-align: center
</style>
