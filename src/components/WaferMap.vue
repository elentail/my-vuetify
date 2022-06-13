<template>
  <svg ref="waferMap" :viewBox="viewBox">
    <g>
      <defs>
        <linearGradient id="gradient-colors" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            v-for="(color, i) in colors"
            :key="i"
            :offset="i / (colors.length - 1)"
            :stop-color="color"
          />
        </linearGradient>
      </defs>
    </g>
    <g>
      <rect
        v-for="(item, i) in data"
        :key="i"
        :x="item.x_pos + offsetX"
        :y="item.y_pos"
        width="14"
        height="4"
        class="chip"
        :fill="colorScale(colorInterpolate(item.value))"
        @mouseenter="logEvent"
      />
    </g>
    <g>
      <rect class="legendRect" x="340" y="30" width="15" height="250" />
    </g>
  </svg>
</template>

<script>
import data from '@/assets/chip_x_y.json';
import * as d3 from 'd3';

const colors = [
  '#2c7bb6',
  '#00a6ca',
  '#00ccbc',
  '#90eb9d',
  '#ffff8c',
  '#f9d057',
  '#f29e2e',
  '#e76818',
  '#d7191c',
];

export default {
  name: 'WaferMap',
  components: {},
  props: {
    viewBox: {
      type: String,
      default: '0 0 380 380',
    },
  },
  data: () => ({
    data: data,
    offsetX: 20,
    colors,
    colorRange: colors.map((d, i) => {
      return i / (colors.length - 1);
    }),
  }),
  methods: {
    logEvent({
      target: {
        attributes: { x, y },
      },
    }) {
      console.log(x, y);
    },
  },
  computed: {
    colorScale() {
      return d3
        .scaleLinear()
        .domain(this.colorRange)
        .range(this.colors)
        .interpolate(d3.interpolateHcl);
    },
    colorInterpolate() {
      const arr = this.data.map((d) => d.value);
      const min = Math.min.apply(null, arr);
      const max = Math.max.apply(null, arr);
      return d3.scaleLinear().domain([min, max]).range([0, 1]);
    },
    xScale() {
      return d3
        .scaleLinear()
        .domain([d3.min(data, (d) => d.chip_x), d3.max(data, (d) => d.chip_x)])
        .range([0, 300]);
    },
    yScale() {
      return d3
        .scaleLinear()
        .domain([d3.min(data, (d) => d.chip_y), d3.max(data, (d) => d.chip_y)])
        .range([0, 300]);
    },
  },
  mounted() {
    const svg = d3.select(this.$refs.waferMap);
    const xAxis = d3.axisBottom(this.xScale).tickSize(2);
    const yAxis = d3.axisLeft(this.yScale).tickSize(2);

    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${this.offsetX}, 300)`)
      .call(xAxis);
    svg
      .append('g')
      .attr('class', 'axis')
      .attr('transform', `translate(${this.offsetX}, 0)`)
      .call(yAxis);
  },
};
</script>

<style>
svg {
  max-height: 55vh;
  max-width: 55vh;
}

.chip {
  stroke: black;
  stroke-width: 0.5;
}

.legendRect {
  fill: url(#gradient-colors);
}
.tick {
  color: #4561b0;
}
</style>
