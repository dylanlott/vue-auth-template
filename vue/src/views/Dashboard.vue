<template>
  <v-container flex>
    <h1>Dashboard</h1>
    <p>This should only be seen if you're logged in!</p>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'dashboard',
  computed: mapState({
    user: state => state.user
  })
}

</script>

<style media="screen" lang="stylus">
  .secondary__nav
    background-color: #eee
    margin: 0px 0px
    padding: 15px 30px
    width: 100%
    height: 50px
    text-align: left

  .card__basic
    margin: 40px 0px

  .dropdown__floating
    width: 200px

  .text-center
    text-align: center
</style>

<style scoped>
  .card__title
    margin: 20px 20px
</style>
