<template>
  <v-navigation-drawer
    v-model="drawer"
    v-bind="$attrs"
    fixed
    temporary
    right
    width="300"
    color="grey darken-4"
    app
  >
    <v-container>
      <v-row>
        <template v-for="n in 4">
          <v-col :key="n" class="mt-2" cols="12">
            <strong>Category {{ n }}</strong>
          </v-col>

          <v-col v-for="j in 2" :key="`${n}${j}`" cols="6" md="6">
            <v-sheet
              outlined
              color="grey light-2"
              rounded
              height="15vh"
            ></v-sheet>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FavoriteDrawer',
  computed: {
    drawer: {
      get() {
        return this.$store.getters.getFavoriteDrawer;
      },
      set(value) {
        this.$store.commit('setFavoriteDrawer', value);
      },
    },
  },
  date() {},
};
</script>
<style></style>
