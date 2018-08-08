<template>
  <v-layout row wrap>
    <v-flex  xs12 sm6 offset-sm3>
      <v-card color="cyan darken-2" class="white--text" flat>
        <v-card-text id="banner" >
          <div class="text-md-center">
            <div id="headline">DATA SCIENTIST</div>
            <div>****************************</div>
            <div>Python | Javascript | SQL | Probabilty & Statistics</div>
            <div id="social-links">
              <a href="https://github.com/nxhuy-github">
                <i class="fab fa-github-square" aria-hidden="true"></i>
              </a>
              <a href="https://forge.univ-lyon1.fr/p1419771">
                <i class="fab fa-gitlab" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </v-card-text>
      </v-card>
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
#banner {
  background-color: black;  /* fallback for old browsers */
  opacity: 0.8;
}

#social-links {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: auto
}

#social-links i {
  color: white;
  font-size: 2em;
  padding: 8px
}

div#headline {
  font-size: 25px;
  font-family: 'Lucida Console','Lucida Sans Typewriter','monaco','Bitstream Vera Sans Mono', monospace;
}

div {
  font-size: 18px;
  font-family: 'Lucida Console','Lucida Sans Typewriter','monaco','Bitstream Vera Sans Mono', monospace;
}
</style>
