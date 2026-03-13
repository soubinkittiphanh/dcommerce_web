<template>
  <nav>
    <!-- <v-system-bar app dark>
      <v-spacer></v-spacer>
      <v-icon>mdi-minus</v-icon>
      <v-icon>mdi-checkbox-blank-outline</v-icon>
      <v-icon>mdi-close</v-icon>
    </v-system-bar> -->
    <v-app-bar app color="pink" light>
      <!-- <v-icon class="mr-2">fas fa-video</v-icon> -->
      <!-- <v-toolbar-title>AAE Movie</v-toolbar-title> -->
      <v-btn text class="ml-2" to="/">Jackets</v-btn>
      <v-btn text class="ml-2" to="/actors">Fashion bags</v-btn>
      <v-btn text class="ml-2">Profile</v-btn>
      <v-btn text class="ml-2">Contact</v-btn>
      <v-spacer></v-spacer>
      <v-autocomplete clearable hide-no-data hide-selected color="white" prepend-inner-icon="search" flat :items="movies"
        item-text="title" item-value="id" id="search">
        <template v-slot:item="{ item }">
          <v-btn text :to="`/movie/${item.id}`">{{ item.title }}</v-btn>
        </template>
      </v-autocomplete>
      <v-btn icon>
        <v-badge color="green" content="2" overlap>
          <v-icon>far fa-bell</v-icon>
        </v-badge>
      </v-btn>
      <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
        <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
        </v-avatar>
      </v-badge>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer light padless>
      <v-card flat tile class="pink white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>WTD </strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </nav>
</template>
<script>
export default {
    data: () =>({
        icons:[
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram'
        ],
        drawer:null,
        model:'',
        search:null,
        movies: []
    })
}
</script>