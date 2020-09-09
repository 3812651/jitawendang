<template>
  <div class="header">
    <div class="logo">Logo</div>
    <ul>
      <li
        v-for="(item,index) in nav_list"
        :key="item.name"
        :class="{isActive:checkIndex==index}"
        @click="nav_change(item,index)"
      >{{item.name}}</li>
    </ul>
    <router-link to="/Layout">
      <Button type="primary" shape="circle" style="border:1px solid #fff">登录</Button>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkIndex: 1,
      nav_list: [
        { name: "社区", url: "/Community" },
        { name: "训练", url: "/Training" },
        { name: "我的" },
      ],
    };
  },
  methods: {
    nav_change(item, index) {
      this.checkIndex = index;
      this.$router.push({ path: item.url });
    },
  },
};
</script>
<style lang="less" scoped>
.isActive {
  color: #fff !important;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.6rem;
  color: white;
  padding: 0 0.5rem;
  // background-color: pink;
  z-index: 9999;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo {
    width: 0.5rem;
    height: 0.5rem;
    background-color: deepskyblue;
    text-align: center;
    line-height: 0.5rem;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  ul {
    display: flex;
    li {
      position: relative;
      width: 1.4rem;
      height: 100%;
      line-height: 0.6rem;
      font-size: 16px;
      color: #b5b7bb;
      // background-color: deepskyblue;
      text-align: center;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }
    li:hover {
      color: #fff;
    }
    li::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0.4rem;
      bottom: 10px;
      width: 0.6rem;
      height: 2px;
      background: #fff;
      transform: scaleX(0);
      transition: transform 0.5s;
    }
    li:hover:before {
      color: #fff;
      transform: scaleX(1);
    }
  }
}
</style>