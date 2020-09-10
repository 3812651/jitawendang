<template>
  <div class="training_box_body">
    <v-header></v-header>
    <div class="training_box">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
      <div class="card_box">
        <ul>
          <li id="1">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="2">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens2.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="3">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="4">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens1.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="5">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="6">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens2.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="7">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="8">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li id="9">
            <svg viewBox="40 74 170 310" width="3.4rem" height="6.2rem">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
    <div class="change_tooltip">
      <div v-for="(item,index) in tooltip_list" :key="item.name" @click="tooltip_click(item,index)">
        <div class="dashed_box" :class="{isActive:checkIndex==index}">
          <Icon type="md-basketball" />
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";

export default {
  data() {
    return {
      checkIndex: 0,
      tooltip_list: [{ name: "Colorful" }, { name: "Outline" }],
    };
  },
  methods: {
    tooltip_click(item, index) {
      this.checkIndex = index;
    },
  },
  mounted() {
    $("#5").addClass("li_active_center");
    $("#5").prev().addClass("li_active_left");
    $("#5").next().addClass("li_active_right");
    $(function () {
      function li_click() {
        let current_id = parseInt($(this).attr("id")), //当前点击li的id
          //上一个拥有居中放大class的li的id
          history_id = parseInt($(".li_active_center").attr("id"));

        //如果选中的li不是上一个居中的li，则把立即把上一个居中及左右li的样式消除
        if (current_id != history_id) {
          console.log($(`#${history_id}`));
          $(`#${history_id}`).removeClass("li_active_center");
          $(`#${history_id}`).prev().removeClass("li_active_left");
          $(`#${history_id}`).next().removeClass("li_active_right");
        }

        //如果是最左或者最右一个li，去除li_active_left或者li_active_right他们的样式
        if (current_id == 1) {
          $(this).removeClass("li_active_left");
        }
        if (current_id == 9) {
          $(this).removeClass("li_active_right");
        }
        setTimeout(() => {
          //为了保持选中的li居中，让ul的位置动态的变化
          if (current_id > 4) {
            // 如果选中的li是第五个及右边，则ul整体往左移动
            let left_overflow_px = -[(current_id - 5) * 182] / 100;
            let a = `translateX(${left_overflow_px}rem)`;
            $(".card_box>ul").css({
              transform: a,
              transition: "all .5s ease",
            });
          } else {
            //如果选中的li的id是前四个，则li整体往右移动
            let left_overflow_px = [(5 - current_id) * 182] / 100;
            let b = `translateX(${left_overflow_px}rem)`;
            $(".card_box>ul").css({
              transform: b,
              transition: "all .5s ease",
            });
          }
        }, 400);
        // 给选中li及左右li加上class
        setTimeout(() => {
          $(this)
            .addClass("li_active_center")
            .siblings()
            .removeClass("li_active_center");
          $(this)
            .prev()
            .addClass("li_active_left")
            .siblings()
            .removeClass("li_active_left");
          $(this)
            .next()
            .addClass("li_active_right")
            .siblings()
            .removeClass("li_active_right");
        }, 900);
      }
      //防抖
      require("../js/debounce.js").debounce(li_click);
      //li点击事件
      $(".card_box>ul>li").click(li_click);
    });
  },
};
</script>
<style lang="less" scoped>
@flex: {
  display: flex;
  justify-content: center;
  align-items: center;
};
.li_active_center {
  height: 4.4rem !important;
  width: 2.15rem !important;
  z-index: 5;
  margin-left: -22px !important;
  margin-right: -22px !important;
  animation: select_dropdown 1.3s linear;
}
@keyframes select_dropdown {
  0% {
    transform: scale(1, 0.9);
  }
  25% {
    transform: scale(1, 1.07);
  }
  50% {
    transform: scale(1, 0.95);
  }
  75% {
    transform: scale(1, 1.05);
  }
  100% {
    transform: scale(1, 1);
  }
}
.li_active_left {
  z-index: 4;
  margin-left: -70px !important;
  height: 3.7rem !important;
  width: 1.75rem !important;
}
.li_active_right {
  z-index: 4;
  height: 3.7rem !important;
  width: 1.75rem !important;
  margin-right: -70px !important;
}
.change_tooltip {
  z-index: 999;
  position: absolute;
  top: 0.8rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 1.7rem;
  height: 0.8rem;
  padding: 0.1rem 0.2rem;
  background-color: #fff;
  color: #b7b8bf;
  border-radius: 0.5rem;
  text-align: center;
  & > div {
    cursor: pointer;
  }
  .dashed_box {
    width: 0.5rem;
    height: 0.5rem;
    border: 2px dashed #dddde4;
    border-radius: 50%;
    @flex();
  }
}

.isActive {
  position: relative;
  animation: dashed-box 0.5s linear;
  border: 5px solid #ff2300 !important;
  & ~ p {
    color: #535267;
  }
}
@keyframes dashed-box {
  0% {
    transform: scale(0.7);
    transform-origin: center;
  }
  50% {
    transform: scale(1.1);
    transform-origin: center;
  }
  75% {
    transform: scale(0.8);
    transform-origin: center;
  }
  100% {
    transform: scale(1);
    transform-origin: center;
  }
}
.isActive:before,
.isActive:after {
  position: absolute;
  background: #dbdcdd;
  width: 0.5rem;
  height: 0.5rem;
  border: 2px solid #d3d4d9;
  content: "";
  display: block;
  border-radius: 50%;
  opacity: 0;
}
.isActive:after {
  border: 5px solid #d3d4d9;
}
.isActive:before {
  animation: wave-animate 1s ease-in-out;
}

.isActive:after {
  animation: wave-animate 1s 0.2s ease-in-out;
}
@keyframes wave-animate {
  0% {
    transform: scale(0);
    opacity: 0.7;
    transform-origin: center;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
    transform-origin: center;
  }
}

.card_box {
  li {
    cursor: pointer;
    transition: all 0.4s ease;
  }
  // li:hover {
  //   transform: scale(1.1, 1.1);
  // }
}
.training_box_body {
  @flex();
  flex-direction: column;
  height: 100%;
  background-image: linear-gradient(135deg, #43cbff 10%, #9708cc 100%);
  .card_box {
    height: 4.4rem;
    width: 100%;
    position: absolute;
    // left: -0.7rem;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 3;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      align-items: center;
      // position: absolute;
      height: 4.4rem;
    }
    li {
      width: 1.7rem;
      height: 3.3rem;
      background-color: #fff;
      margin: 0 6px;
      border-radius: 13px;
      box-shadow: 0px 2px 7px #c9ccd5;
      svg {
        pointer-events: none;
      }
    }
  }
  .training_box {
    position: relative;
    width: 100%;
    height: (100vh - 0.6rem);
    margin-top: 0.6rem;
    overflow: hidden;
    // background-color: #e6e9f0;
    .center {
      z-index: 1;
      height: 100%;
      width: 3.2rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      // box-shadow: 0px 2px 45px #c9ccd5;
      // background-color: #e6e9f0;
    }
    .left {
      position: absolute;
      left: 50%;
      transform: translateX(-100%);
      height: 100%;
      width: 3.2rem;
      // box-shadow: 0px 2px 45px #c9ccd5;
      // background-color: #e6e9f0;
    }
    .right {
      position: absolute;
      left: 50%;
      height: 100%;
      width: 3.2rem;
      // box-shadow: 0px 2px 45px #c9ccd5;
      // background-color: #e6e9f0;
    }
  }
}
</style>