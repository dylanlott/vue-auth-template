<template>
  <v-container fluid>
      <v-layout row>
        <v-flex xs6>
          <v-card>
            <v-card-text>
              <router-link class="routerlink" :to="{ name: 'signup'}">
                <v-btn>Sign Up</v-btn>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>

        <v-flex xs6>
          <v-card>
            <v-card-text>
              <router-link class="routerlink" :to="{ name: 'login'}">
                <v-btn>Login</v-btn>
              </router-link>
            </v-card-text>
          </v-card>
        </v-flex>

      </v-layout>
    </div>
  </v-container>
</template>

<script>

export default {
  name: 'landing',
  components: { }
}
</script>

<style lang="stylus">
.header__img
  margin-top: -14px
  margin-bottom: 30px
  width: 100%
  z-index: -999

.header__container
  width: 100%

.tagline
  color: #fff
</style>
