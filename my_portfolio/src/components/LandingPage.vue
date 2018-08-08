<template>
  <v-layout row wrap>
    <v-flex  xs12 sm6 offset-sm3>
      <v-avatar size="190px">
        <img src="../assets/my_face_manga.jpg" alt="avatar">
      </v-avatar>
    </v-flex>
    <v-flex xs12 sm6 offset-sm3>
      <v-container fluid grid-list-lg>
      <v-card color="cyan darken-2" class="white--text">
        <v-card-text primary-title >
          <div class="text-md-center">
            <div class="headline">Data Scientist</div>
            <div>*******************************</div>
            <div>Python | Javascript | SQL | Probabilty & Statistics</div>
          </div>
        </v-card-text>
      </v-card>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#avatar-img {
  padding-top: 5em
}
</style>
