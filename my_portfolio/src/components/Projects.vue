<template>
  <v-layout rwo wrap>
    <v-flex  xs12 sm6 offset-sm3>
      <v-tabs centered dark icons-and-text>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab href="#tab1">
            Javascript
            <i class="fab fa-js-square"></i>
          </v-tab>
          <v-tab href="#tab2">
            Python
            <i class="fab fa-python"></i>
          </v-tab>
          <v-tab-item
            v-for="i in 2"
            :id="'tab' + i"
            :key="i"
            >
            <div v-if='i === 1'>
              <projects-javascript />
            </div>
            <div v-else>
              <projects-python />
            </div>
          </v-tab-item>
        </v-tabs>
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectsJavascript from './ProjectsJavascript'
import ProjectsPython from './ProjectsPython'

export default {
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  components: {
    ProjectsJavascript,
    ProjectsPython
  }
}
</script>

<style>
i {
  color: white;
  font-size: 2em;
  padding: 8px
}
</style>
