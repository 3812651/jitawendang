<template>
  <div id="layout">
    <div class="user_box">
      <Card class="user_card">
        <div class="card_bg"></div>
        <div slot="title" class="title">
          <span>Built for EveryOne</span>
          <a @click="goBack">返回首页</a>
        </div>
        <div class="content_text">
          <h1>分享知识才能走的更远</h1>
          <Timeline>
            <TimelineItem color="green">
              <Icon type="ios-settings-outline" slot="dot" color="#fff" />
              <span>这里有最基础但最重要的知识</span>
            </TimelineItem>
            <TimelineItem>
              <Icon type="ios-build-outline" slot="dot" color="#fff" />
              <span>在这里你可以学会如何使用各种调音软件和录音设备</span>
            </TimelineItem>
            <TimelineItem>
              <Icon type="ios-help-circle-outline" slot="dot" color="#fff" />
              <span>如果你不懂的话请到社区求助</span>
            </TimelineItem>
            <TimelineItem>
              <Icon type="md-bulb"  slot="dot" color="#fff" />
              <span>相反如果你很厉害的话，请不要吝啬你的知识，你会因此学到更多!</span>
            </TimelineItem>
          </Timeline>
          <span class="rectangle"></span>
          <span class="circle"></span>
          <svg class="triangle" width="50px" height="50px">
            <polygon class="triangle-polygon" points="25,5 45,40 5,40" />
          </svg>
        </div>
        <transition mode="out-in">
          <component @view="show" :is="view"></component>
        </transition>
      </Card>
    </div>
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
      routePath: "",
    };
  },
  methods: {
    show(data) {
      this.view = data;
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
@pink: #fe6cb9;
@blue: #6cbafe;
@purple: #9c70ff;
@size: 50px;
@border-width: 8px;
/deep/.ivu-timeline-item-head {
  background-color: transparent;
}
.rectangle,
.circle,
.triangle {
  display: block;
}
.triangle {
  position: absolute;
  right: -20px;
  top: 25px;
  transform: rotate(-45deg);
}
.triangle-polygon {
  fill: transparent;
  stroke: @blue;
  stroke-width: @border-width;
  filter: drop-shadow(3px 3px 20px rgb(@blue));
}
.rectangle {
  width: @size;
  height: @size;
  border: @border-width solid @purple;
  box-shadow: 3px 3px 20px rgb(@purple);
  position: absolute;
  bottom: -30px;
  transform: rotate(20deg);
}
.circle {
  width: @size;
  height: @size;
  border-radius: 100%;
  border: @border-width solid @pink;
  box-shadow: 3px 3px 20px rgb(@pink);
  position: absolute;
  left: -35px;
  top: -5px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(-150px);
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
    // background-image: url("../../assets/loginback.jpg");
    background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
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
    z-index: 999;
    box-shadow: 3px 4px 15px rgb(black, 0.7);
    /deep/ .ivu-card-body {
      display: flex;
      justify-content: space-around;
      .content_text {
        width: 50%;
        font-family: "Helvetica Neue";
      }
      h1 {
        margin-bottom: 0.2rem;
      }
    }
    .title {
      display: flex;
      justify-content: space-between;
      padding: 0 0.4rem;
      color: #fff;
      a {
        color: #b5b7bb;
        transition: all 0.3s ease-in-out;
      }
      a:hover {
        color: #fff;
      }
      span {
        color: #fff;
      }
      span {
        font-size: 0.14rem;
      }
    }
  }
}
#layout {
  // background-image: url("../../assets/back.png");
  background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
</style>