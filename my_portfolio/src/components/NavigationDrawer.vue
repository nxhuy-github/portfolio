<template>
  <v-layout row wrap>
    <v-navigation-drawer id="navigation" :clipped="clipped" v-model="drawer" enable-resize-watcher app dark class="purple lighten-1">
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="navigateTo({name: item.route})">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar id="landing-grid" fixed app :clipped-left="clipped" color="amber darken-1" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" aria-hidden="true"></v-toolbar-side-icon>
        <v-toolbar-title>My Portfolio</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon aria-hidden="true">
          <v-icon>more_vert</v-icon>
        </v-btn>
    </v-toolbar>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: `Home`, icon: 'home', route: 'LandingPage' },
        { title: `Projects`, icon: 'work', route: 'Projects' },
        { title: 'Resume', icon: 'file_copy', route: 'Resume' },
        { title: 'About', icon: 'face', route: 'About' },
        { title: 'Contact', icon: 'contact_support', route: 'Contact' }
      ],
      clipped: false
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style>
#landing-grid {
  background: #833ab4;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #fcb045, #fd1d1d, #833ab4);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
#navigation {
  background: #7F00FF;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #E100FF, #7F00FF);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #E100FF, #7F00FF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
