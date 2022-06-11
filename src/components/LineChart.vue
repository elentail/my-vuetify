<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script>
import 'echarts';
import VChart, { THEME_KEY } from 'vue-echarts';
import chalk from '@/assets/theme/chalk';
import shine from '@/assets/theme/shine';

// import { computed } from '@vue/composition-api';

export default {
  name: 'LineChart',
  components: {
    VChart,
  },
  provide() {
    return {
      [THEME_KEY]: this.theme,
    };
  },
  computed: {
    theme() {
      if (this.$vuetify.theme.dark) return chalk;
      else return shine;
    },
  },
  methods: {},
  data() {
    return {
      // theme: chalk,
      option: {
        title: {
          text: 'Stacked Line',
        },
        tooltip: {
          trigger: 'axis',
          textStyle: {
            fontSize: '12',
          },
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 50vh;
}
</style>
