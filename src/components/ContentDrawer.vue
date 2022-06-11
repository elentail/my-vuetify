<template>
  <v-navigation-drawer
    id="default-toc"
    class="py-4"
    clipped
    floating
    width="240"
    app
  >
    <template v-if="toc.length" #prepend>
      <p class="text-h5 ma-3 text-center">Content</p>
    </template>
    <template v-slot:default>
      <ul class="mb-6">
        <router-link
          v-for="({ to, level, text }, i) in toc"
          :key="i"
          v-slot="{ href, isActive }"
          :to="to"
          custom
        >
          <li
            :class="{
              'primary--text router-link-active': isActive,
              'text--secondary': !isActive,
              'pl-6': level === 3,
              'pl-9': level === 4,
              'pl-12': level === 5,
            }"
            class="pl-3 text-body-2 py-1 font-weight-medium"
          >
            <a
              :href="href"
              class="v-toc-link d-block transition-swing text-decoration-none"
              @click.stop.prevent="onClick(to)"
              v-text="text"
            />
          </li>
        </router-link>
      </ul>
    </template>
    <!-- <div class="ml-5">
      <app-caption
        v-if="sponsors.length"
        class="ml-2 mb-3"
        path="platinum-sponsors"
      />

      <sponsors
        class="mb-3"
        compact
        no-gutters
        tier="2"
      />

      <sponsor-link
        class="ml-2"
        small
      />
    </div> -->
    <template v-if="toc.length" #append>
      <p class="text-caption text-center">Copy.Elenscode</p>
    </template>
  </v-navigation-drawer>
</template>

<script>
// Utilities
export default {
  name: 'ContentDrawer',
  data: () => ({
    offsets: [],
    hash: null,
    toc: [
      {
        to: '#top-level',
        level: 1,
        text: 'Top Level1',
      },
      {
        to: '#mid-level1',
        level: 3,
        text: 'Mid Level1',
      },
      {
        to: '#mid-level2',
        level: 3,
        text: 'Mid Level2',
      },
      {
        to: '#mid-level3',
        level: 3,
        text: 'Mid Level3',
      },
    ],
  }),
  computed: {},
  methods: {
    async onClick(hash) {
      if (this.$router.history.current.hash === hash) return;
      this.$router.replace(hash);
      await this.$vuetify.goTo(hash);
    },

    onScroll() {
      clearTimeout(this.timeout);
      if (this.scrolling || !this.toc.length) return;
      this.timeout = setTimeout(this.findActiveIndex, 17);
    },
  },
};
</script>

<style lang="sass">
#default-toc
  ul
    list-style-type: none
  li
    border-left: 2px solid #E5E5E5
    &.router-link-active
      border-left-color: currentColor
  .v-toc-link
    color: inherit
  &.theme--dark
    li:not(.router-link-active)
      border-left-color: rgba(255, 255, 255, 0.7)
</style>
