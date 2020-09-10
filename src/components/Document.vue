<template>
  <div class="document_body">
    <v-header></v-header>
    <div class="document_box">
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in nav_list"
            :key="item.name"
            :class="{isActive:checkIndex==index}"
            @click="nav_change(item,index)"
          >
            <svg-icon iconClass="basic" className="icon_basic" v-if="checkIndex==index" />
            <svg-icon iconClass="basic_default" className="icon_basic" v-else />
          </li>
        </ul>
      </div>
      <div class="content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkIndex: 0,
      nav_list: [
        { name: "基础乐理", src: "../assets/document/basic.svg" },
        { name: "进阶乐理", src: "../assets/document/basic.svg" },
      ],
    };
  },
  methods: {
    nav_change(item, index) {
        this.checkIndex = index
    },
  },
};
</script>

<style lang="less" scoped>
.icon_basic {
  color: #8e6af6;
}
.document_body {
  height: 100%;
  background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
}
.document_box {
  width: 100%;
  height: (100vh - 0.6rem);
  // margin-top: 0.6rem;
  display: flex;
  overflow: hidden;
  padding: 0.8rem 1.79rem 0;
  .nav {
    height: 100%;
    width: 0.5rem;
    // background-color: deeppink;
    li {
      display: flex;
      justify-content: center;
      cursor: pointer;
    }
  }
  .content {
    height: 100%;
    flex-grow: 1;
    // background-color: #fff;
  }
}
</style>