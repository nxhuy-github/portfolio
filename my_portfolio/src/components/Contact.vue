<template>
  <v-layout row wrap>
    <v-flex  xs12 sm6 offset-sm3>
      <v-card dark>
        <v-card-text>
          <div>
            <div>
              <h1>Contact Me</h1><br/>
              <h1>***********</h1>
            </div>
          </div>
        </v-card-text>
        <v-list two-line>
          <v-list-tile>
            <v-list-tile-action>
              <i id="icon" class="fas fa-phone-square"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{mobile}}</v-list-tile-title>
              <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <i id="icon" class="fas fa-envelope"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{email}}</v-list-tile-title>
              <v-list-tile-sub-title>Email</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile>
            <v-list-tile-action>
              <i id="icon" class="fas fa-map-marker-alt"></i>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{address1}}</v-list-tile-title>
              <v-list-tile-title>{{address2}}</v-list-tile-title>
              <v-list-tile-sub-title>Address</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      name: 'NGUYEN Xuan Huy',
      about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.`,
      email: 'xuanhuy.d.nguyen@gmail.com',
      address1: 'ABC rue DEF',
      address2: 'Villeurbanne, 6900',
      mobile: '132-456-789'
    }
  }
}
</script>

<style>
i {
  color: black;
  font-size: 2em;
  padding: 8px
}

div {
  font-family: 'Lucida Console','Lucida Sans Typewriter','monaco','Bitstream Vera Sans Mono', monospace;
}
</style>
