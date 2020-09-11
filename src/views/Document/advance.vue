<template>
  <div>
    <Menu mode="horizontal" active-name="1">
      <MenuItem name="1">
        <Icon type="ios-paper" />音阶
      </MenuItem>
      <MenuItem name="2">
        <Icon type="ios-people" />旋律
      </MenuItem>
      <MenuItem name="3">
        <Icon type="ios-construct" />和声
      </MenuItem>
      <MenuItem name="4">
        <Icon type="ios-construct" />曲式
      </MenuItem>
    </Menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
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