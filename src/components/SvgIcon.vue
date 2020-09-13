<!--
 * @Descripttion:  svg组件
 * @version: 
 * @Author: xiaohuangya
 * @Date: 2020/9/10
 * @LastEditors: xiaohuangya
 * @LastEditTime: 2020/9/10
 -->
<template>
  <svg :class="svgClass"
       aria-hidden="true"
       v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 0.5rem;
  height: 0.5rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
