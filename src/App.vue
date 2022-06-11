<template>
  <v-app id="inspire">
    <app-bar />
    <content-drawer />
    <favorite-drawer />

    <v-main :class="$vuetify.theme.dark ? 'dark' : 'grey lighten-3'">
      <v-container fluid>
        <v-row justify="center">
          <!-- <v-col cols="12" md="2" class="hidden-sm-and-down">
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item v-for="n in 5" :key="n" link>
                  <v-list-item-content>
                    <v-list-item-title> List Item {{ n }} </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item link color="grey lighten-4">
                  <v-list-item-content>
                    <v-list-item-title> Refresh </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col> -->

          <v-col cols="12" md="5">
            <v-alert
              dense
              flat
              type="info"
              rounded="lg"
              elevation="2"
              id="top-level"
            >
              Type1. Test ITEM
            </v-alert>
            <v-sheet min-height="40vh" rounded="lg">
              <v-select :items="items" label="Selct Version"></v-select>

              <v-sparkline
                :fill="fill"
                :color="$vuetify.theme.dark ? '#E0E0E0' : '#222'"
                :line-width="width"
                :padding="padding"
                :smooth="radius || false"
                :value="value"
                auto-draw
              ></v-sparkline>

              <v-simple-table dense>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-center">Name</th>
                      <th class="text-center">Calories</th>
                      <th class="text-center">Calories</th>
                    </tr>
                  </thead>
                </template>
              </v-simple-table>
            </v-sheet>
          </v-col>

          <v-col cols="12" md="5">
            <v-alert
              dense
              type="info"
              rounded="lg"
              elevation="2"
              id="mid-level1"
            >
              Type1. Test ITEM
            </v-alert>
            <v-sheet
              min-height="40vh"
              rounded="lg"
              height="40vh"
              class="overflow-auto"
            >
              <v-toolbar flat color="transparent">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                ></v-text-field>
              </v-toolbar>

              <v-card-text class="py-0">
                <v-chip v-for="(keyword, i) in keywords" :key="i" class="mr-2">
                  {{ keyword }}
                </v-chip>
              </v-card-text>

              <v-list three-line>
                <v-list-item
                  v-for="(item, i) in searching"
                  :key="i"
                  ripple
                  @click="() => {}"
                >
                  <v-img
                    :src="item.image"
                    class="mr-4"
                    max-width="64"
                    min-width="64"
                  ></v-img>

                  <v-list-item-content>
                    <span
                      class="text-uppercase font-weight-regular text-caption"
                      v-text="item.category"
                    ></span>

                    <div v-text="item.title"></div>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="10">
            <v-sheet min-height="35vh" rounded="lg">
              <v-alert dense elevation="3" outlined type="info" id="mid-level2"
                >Tutorial</v-alert
              >
              <hover-view />
            </v-sheet>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12" md="5">
            <line-chart />
          </v-col>
          <v-col cols="12" md="5">
            <date-range />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue';
import HoverView from '@/components/HoverView.vue';
import LineChart from '@/components/LineChart.vue';
import FavoriteDrawer from '@/components/FavoriteDrawer.vue';
import ContentDrawer from '@/components/ContentDrawer.vue';
import DateRange from '@/components/DateRange.vue';

export default {
  name: 'App',
  components: {
    AppBar,
    HoverView,
    LineChart,
    FavoriteDrawer,
    ContentDrawer,
    DateRange,
  },
  data: () => ({
    group: null,

    items: ['Version0', 'Version1', 'Version2'],
    fill: true,
    padding: 8,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
    news: [
      {
        image: require('@/assets/sample.png'),
        title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
        category: 'Travel',
        keyword: 'Drinks',
      },
      {
        image: require('@/assets/sample.png'),
        title:
          'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
        category: 'Technology',
        keyword: 'Phones',
      },
      {
        image: require('@/assets/sample.png'),
        title: 'How to Get Media Mentions for Your Business',
        category: 'Media',
        keyword: 'Social',
      },
      {
        image: require('@/assets/sample.png'),
        title:
          'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
        category: 'Technology',
        keyword: 'Military',
      },
      {
        image: require('@/assets/sample.png'),
        title: 'Degrees of Freedom and Sudoko',
        category: 'Travel',
        keyword: 'Social',
      },
    ],
    search: '',
  }),
  methods: {
    showLog() {
      console.log('show');
    },
    toggleDarkMode: function () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark.toString());
    },
  },

  mounted() {
    const theme = localStorage.getItem('darkTheme');

    // Check if the user has set the theme state before
    if (theme) {
      if (theme === 'true') {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    } else {
      this.$vuetify.theme.dark = false;
      localStorage.setItem('darkTheme', this.$vuetify.theme.dark.toString());
    }
  },

  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.news;

      const search = this.search.toLowerCase();

      return this.news.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
};
</script>
