<template>
  <div id="countdown">
    <svg :width="size" :height="size">
      <circle fill="transparent" :stroke-width="stroke" stroke="#270B58" :r="radius" :cx="circleOffset" :cy="circleOffset"></circle>
      <circle class="circle" fill="transparent" :stroke-width="stroke" stroke="#F36F21" :r="radius" :cx="circleOffset" :cy="circleOffset" :stroke-dasharray="circumference" :stroke-dashoffset="progress"
        stroke-linecap="round"></circle>
    </svg>
    <span>{{ countdown }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 150,
      stroke: 7.5,
      percentage: 100,
      timer: null,
      seconds: 5,
    };
  },
  computed: {
    radius() {
      return this.size / 2 - this.stroke / 2;
    },
    circleOffset() {
      return this.size / 2;
    },
    circumference() {
      return this.radius * 2 * Math.PI;
    },
    progress() {
      return this.circumference - (this.circumference * this.percentage) / 100;
    },
    countdown() {
      return Math.ceil((this.seconds * this.percentage) / 100);
    },
  },
  methods: {
    animate() {
      this.timer = setInterval(() => {
        this.percentage -= 1 / 10;
        if (this.percentage <= 0) {
          clearInterval(this.timer);
          this.percentage = 100;
        }
      }, (this.seconds * 1000) / 100 / 10);
    },
  },
};
</script>
<style lang="less" scoped>
.circle {
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}

#countdown {
  display: inline-block;
  position: relative;
}

span {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  font-size: 125px;
  font-family: monospace;
  color: #f36f21;
}
</style>