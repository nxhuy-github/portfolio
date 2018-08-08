<template>
      <v-card flat dark>
        <v-layout row wrap>
          <v-flex v-for="project in projects" v-bind="{[`xs${project.flex}`]: true}" :key="project.id">
            <v-card>
              <v-card-media :src="require(`@/assets/${project.src}`)" height='200px' class="white--text">
                <v-container fill-height fluid pa-2>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span id="headline">{{project.title}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  <span>{{project.content}}</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <a :href='project.link'>
                  <i id="detail" class="fab fa-github" aria-hidden="true"></i>
                </a>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'My City Mapper',
          src: 'logo.png',
          flex: 6,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          link: 'https://forge.univ-lyon1.fr/p1419771'
        },
        {
          id: 2,
          title: 'Film Tracker',
          src: 'logo.png',
          flex: 6,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          link: 'https://github.com/nxhuy-github/film-tracker'
        },
        {
          id: 3,
          title: 'My Portfolio',
          src: 'logo.png',
          flex: 6,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          link: 'https://github.com/nxhuy-github/portfolio'
        },
        {
          id: 4,
          title: 'Practice D3JS',
          src: 'd3js.png',
          flex: 6,
          content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
          link: 'https://github.com/nxhuy-github/Practice_D3JS'
        }
      ]
    }
  }
}
</script>

<style>
i#detail {
  color: white;
  font-size: 3em;
  padding: 8px
}

span#headline {
  font-size: 20px;
  font-family: 'Lucida Console','Lucida Sans Typewriter','monaco','Bitstream Vera Sans Mono', monospace;
}

span {
  font-family: 'Lucida Console','Lucida Sans Typewriter','monaco','Bitstream Vera Sans Mono', monospace;
}
</style>
