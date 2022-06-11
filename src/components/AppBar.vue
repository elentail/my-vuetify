<template>
  <v-app-bar app dark clipped-left flat class="d-flex justify-center">
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'transparent' : 'grey darken-1'"
      size="32"
    ></v-avatar>

    <v-tabs centered color="blue darken-2">
      <v-tab v-for="(link, i) in links" :key="i">
        {{ link }}
      </v-tab>
    </v-tabs>

    <v-responsive class="mr-3 ml-3 hidden-sm-and-down" max-width="260">
      <v-text-field
        dense
        flat
        hide-details
        rounded
        solo-inverted
      ></v-text-field>
    </v-responsive>

    <v-btn icon @click="toggleDarkMode">
      <v-icon v-if="$vuetify.theme.dark">mdi-brightness-5</v-icon>
      <v-icon v-else>mdi-brightness-4</v-icon>
    </v-btn>

    <v-btn icon @click="favoriteDrawer = !favoriteDrawer">
      <v-icon>mdi-cog</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  data: () => ({
    links: ['Dashboard', 'Messages', 'Profile', 'Updates'],
  }),
  methods: {
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark.toString());
    },
  },
  computed: {
    favoriteDrawer: {
      get() {
        return this.$store.getters.getFavoriteDrawer;
      },
      set(value) {
        this.$store.commit('setFavoriteDrawer', value);
      },
    },
  },
};
</script>

<style></style>
