<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="computedRange"
        label="Date Range"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
        dense
        class="text-body-2"
      />
    </template>
    <v-date-picker v-model="range" range no-title scrollable>
      <v-btn text color="primary" @click="menu = false"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DateRange',
  data: () => ({
    menu: false,
    range: ['2022-03-10', '2022-03-15'],
  }),
  computed: {
    computedRange: {
      get() {
        return this.range.join(' ~ ');
      },
    },
  },
};
</script>

<style></style>
