<template>
  <div class="basic_box">
    <Menu mode="horizontal" active-name="score" @on-select="menuChange">
      <MenuItem name="score">
        <Icon type="ios-paper" />识谱
      </MenuItem>
      <MenuItem name="interval">
        <Icon type="ios-people" />音程
      </MenuItem>
      <MenuItem name="chord">
        <Icon type="ios-construct" />和弦
      </MenuItem>
      <MenuItem name="tempo">
        <Icon type="ios-construct" />节奏
      </MenuItem>
    </Menu>
    <component :is="view"></component>
  </div>
</template>
<script>
import score from "./score.vue";
import interval from "./interval.vue";
import chord from "./chord.vue";
import tempo from "./tempo.vue";
export default {
  components: {
    score,
    interval,
    chord,
    tempo,
  },
  data() {
    return {
      view: "score",
    };
  },
  methods: {
    menuChange(name) {
      this.view = name;
    },
  },
};
</script>
<style lang="less" scoped>
.basic_box{
  height:100%;
}
/deep/.ivu-menu-light {
  background: none;
  .ivu-menu-item {
    color: #525151;
  }
  &:after {
    background: #b2b4b7;
  }
}
/deep/.ivu-menu-light.ivu-menu-horizontal {
  .ivu-menu-item-active,
  .ivu-menu-item:hover {
    color: #e0dfe0;
    border-bottom: 2px solid #e0dfe0;
  }
}
</style>