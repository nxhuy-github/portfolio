<template>
  <div>
    <v-app light>
      <navigation-drawer id="landing-grid"/>
      <router-view id="landing-grid"></router-view>
    </v-app>
  </div>
</template>

<script>
import NavigationDrawer from './components/NavigationDrawer'
export default {
  name: 'App',
  components: {
    NavigationDrawer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#landing-grid {
  background: #833ab4;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
