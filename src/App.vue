
  
<template>
  <v-app id="inspire">
    <v-app-bar
      app
      dark
      flat
      class="d-flex justify-center"
    >
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'transparent' : 'grey darken-1' "
        size="32"
      ></v-avatar>

      <v-tabs
        centered
        color="blue darken-2"
      >
        <v-tab
          v-for="link in links"
          :key="link"
        >
          {{ link }}
        </v-tab>
      </v-tabs>

        <v-responsive 
          class="mr-3 ml-3 hidden-sm-and-down"
          max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>      


      <v-btn
        icon
        @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon v-if="$vuetify.theme.dark ">mdi-brightness-5</v-icon>
        <v-icon v-else>mdi-brightness-4</v-icon>
      </v-btn>        

      <v-btn
        icon
        @click="drawer = true"
      >
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      width="400"      
    >
      <v-container>
        <v-row>
          <template v-for="n in 4">
            <v-col
              :key="n"
              class="mt-2"
              cols="12"
            >
              <strong>Category {{ n }}</strong>
            </v-col>

            <v-col
              v-for="j in 3"
              :key="`${n}${j}`"
              cols="6"
              md="4"
            >
              <v-sheet height="15vh"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-navigation-drawer>    




    <v-main :class='$vuetify.theme.dark ? "dark" : "grey lighten-3"' >
      <v-container fluid>
        <v-row 
        justify="center">
          <v-col 
            cols="12"
            md="2"
            class="hidden-sm-and-down"
          >
            <v-sheet rounded="lg">
              <v-list color="transparent">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      List Item {{ n }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  link
                  color="grey lighten-4"
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      Refresh
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col 
            cols="12"
            md="4"
          >
            <v-alert
                dense
                flat
                type="info"
                rounded="lg"
                elevation="2"
              >
              Type1. Test ITEM
            </v-alert>          
            <v-sheet
              min-height="40vh"
              rounded="lg"
            >

            <v-select
              :items="items"
              label="Selct Version"
            ></v-select>

            <v-sparkline
              :fill="fill"
              :gradient="selectedGradient"
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
                    <th class="text-center">
                      Name
                    </th>
                    <th class="text-center">
                      Calories
                    </th>
                    <th class="text-center">
                      Calories
                    </th>                    
                  </tr>
                </thead>     
              </template>
            </v-simple-table>       

            </v-sheet>
          </v-col>

          <v-col 
            cols="12"
            md="4"
          >
            <v-alert
                dense
                type="info"
                rounded="lg"
                elevation="2"
              >
              Type1. Test ITEM
            </v-alert>             
            <v-sheet
              min-height="40vh"
              rounded="lg"
              height="40vh" class="overflow-auto"
            >

<v-toolbar
      flat
      color="transparent"
    >
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
      ></v-text-field>
    </v-toolbar>

    <v-card-text class="py-0">
      <v-chip
        v-for="(keyword, i) in keywords"
        :key="i"
        class="mr-2"
      >
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

        <v-row
        justify="center"
        >
          <v-col
            cols="12"
            md="8"
            offset-md="2"
          >
            <v-sheet
              min-height="35vh"
              rounded="lg"
            >
              
                  <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step
          editable
          step="1"
        >
          Select campaign settings
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          editable
          step="2"
        >
          Create an ad group
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          editable
        >
          Create an ad
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>


            </v-sheet>            
          </v-col>

        </v-row>

           
      </v-container>
    </v-main>
    <v-footer 
    padless
    dark

    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Elenscode.com</strong>
        
      </v-col>
    </v-footer> 

  </v-app>
</template>

<script>

  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    name:'App',
    data: () => ({
      drawer : false,
      group: null,

      items :['Version0', 'Version1', 'Version2'],
      links: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      fill: true,
      selectedGradient: gradients[4],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,      
      news: [
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
          title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
          category: 'Travel',
          keyword: 'Drinks',

        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png',
          title: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
          category: 'Technology',
          keyword: 'Phones',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg',
          title: 'How to Get Media Mentions for Your Business',
          category: 'Media',
          keyword: 'Social',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg',
          title: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
          category: 'Technology',
          keyword: 'Military',
        },
        {
          image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
          title: 'Degrees of Freedom and Sudoko',
          category: 'Travel',
          keyword: 'Social',
        },
      ],
      search: '',

    }),
    methods:{
      showLog(){
        console.log('show');
      }
    },

    computed: {
      keywords () {
        if (!this.search) return []

        const keywords = []

        for (const search of this.searching) {
          keywords.push(search.keyword)
        }

        return keywords
      },
      searching () {
        if (!this.search) return this.news

        const search = this.search.toLowerCase()

        return this.news.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
      },    
    },
  }
</script>