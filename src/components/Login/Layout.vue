<template>
  <div class="user_box">
    <Card class="user_card">
      <div class="card_bg"></div>
      <p slot="title" style="color:white">Built for developers</p>
      <div class="content_text">
        <h1>欢迎进入这里的世界</h1>
        <p>The time that my journey takes is long and the way of it long.I came out on the chariot of the first gleam of light, and pursued my voyage through the wildernesses of worlds leaving my track on many a star and planet.</p>
      </div>
      <transition name="component-fade" mode="out-in">
        <component @view="show" :is="view"></component>
      </transition>
    </Card>
  </div>
</template>

<script>
import Login from "./Login.vue";
import Register from "./Register.vue";
export default {
  components: {
    Register,
    Login,
  },
  data() {
    return {
      name: "Layout",
      view: "Login",
    };
  },
  methods: {
    show(data) {
      this.view = data
    },
  },
};
</script>

<style lang="less" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.5s;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(150px);
}
@d_flex: {
  display: flex;
  justify-content: center;
  align-items: center;
};

.card_bg {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  z-index: -2;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    left: -20px;
    right: -20px;
    bottom: -20px;
    top: -20px;
    filter: blur(10px);
    background-image: url("../..//assets/back.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
.user_box {
  height: 100vh;
  @d_flex();
  color: white;
  .user_card {
    background-color: transparent;
    width: 850px;
    height: 420px;
    border: none;
    position: relative;
    box-shadow: 3px 4px 15px rgb(black, 0.7);
    /deep/ .ivu-card-body {
      display: flex;
      justify-content: space-around;
      .content_text {
        width: 50%;
      }
    }
  }
}
</style>