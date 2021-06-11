<template>
  <div id="app">
    <v-app>
      <v-app-bar app>
      </v-app-bar>

      <v-main>
        <v-container fluid>

          <SurveysTrial />

        </v-container>
      </v-main>

      <v-footer app>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import SurveysTrial from './components/SurveysTrial.vue'

export default {
  name: 'App',
  components: {
    SurveysTrial
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
