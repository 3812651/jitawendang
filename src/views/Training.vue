<template>
  <div class="training_box_body">
    <v-header></v-header>
    <div class="training_box">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
      <div class="card_box">
        <ul>
          <li v-for="item in svg_list" :key="item.iconClass" :id="item.id">
            <svg-icon :iconClass="item.iconClass" class="svg_default" />
            <svg-icon iconClass="tempo_qianxiao_shoushi"  />
            <i class="play_btn" v-show="btn_flag" @click="btn_flag=!btn_flag"></i>
            <i class="pause_btn" v-show="!btn_flag" @click="btn_flag=!btn_flag"></i>
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
      li_index: 4,
      btn_flag:true,
      tooltip_list: [{ name: "Colorful" }, { name: "Outline" }],
      svg_list: [
        { id: 1, iconClass: "tempo_28" },
        { id: 2, iconClass: "tempo_816" },
        { id: 3, iconClass: "tempo_168" },
        { id: 4, iconClass: "tempo_416" },
        { id: 5, iconClass: "tempo_qianxiao" },
        { id: 6, iconClass: "tempo_houxiao" },
        { id: 7, iconClass: "tempo_xiaoqiefen" },
        { id: 8, iconClass: "tempo_4" },
        { id: 9, iconClass: "tempo_unknow" },
      ],
    };
  },
  methods: {
    tooltip_click(item, index) {
      this.checkIndex = index;
    },
  },
  mounted() {
    console.log($("#5").children("svg"));
    $("#5").addClass("li_active_center");
    $("#5").children("svg").addClass("svg_active");

    $("#5").prev().addClass("li_active_left");
    $("#5").prev().children("svg").addClass("svg_active_left_right");

    $("#5").next().addClass("li_active_right");
    $("#5").next().children("svg").addClass("svg_active_left_right");
    $(function () {
      function li_click() {
        let current_id = parseInt($(this).attr("id")), //当前点击li的id
          //上一个拥有居中放大class的li的id
          history_id = parseInt($(".li_active_center").attr("id"));

        //如果选中的li不是上一个居中的li，则把立即把上一个居中的li及它左右的li的样式消除
        //以及把li里面的svg恢复成默认样式
        if (current_id != history_id) {
          let history_li = $(`#${history_id}`);
          history_li.removeClass("li_active_center");
          history_li.prev().removeClass("li_active_left");
          history_li.next().removeClass("li_active_right");

          history_li.children("svg").removeClass("svg_active");
          history_li
            .prev()
            .children("svg")
            .removeClass("svg_active_left_right");
          history_li
            .next()
            .children("svg")
            .removeClass("svg_active_left_right");
        }

        //如果是最左或者最右一个li，去除li_active_left或者li_active_right他们的样式
        if (current_id == 1) {
          $(this).removeClass("li_active_left");
          $(this).children("svg").removeClass("svg_active_left_right");
        }
        if (current_id == 9) {
          $(this).removeClass("li_active_right");
          $(this).children("svg").removeClass("svg_active_left_right");
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
        // 给选中li及左右li，还有里面的svg加上class
        setTimeout(() => {
          $(this).addClass("li_active_center");
          $(this).prev().addClass("li_active_left");
          $(this).next().addClass("li_active_right");

          $(this).children("svg").addClass("svg_active");
          $(this).prev().children("svg").addClass("svg_active_left_right");
          $(this).next().children("svg").addClass("svg_active_left_right");
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

.svg_default {
  width: 1.7rem !important;
  height: 1.1rem !important;
  transition: all 0.4s ease;
}
.svg_active {
  width: 2rem !important;
  height: 1.85rem !important;
}
.svg_active_left_right {
  width: 1.6rem !important;
  height: 1.25rem !important;
}

.li_active_center {
  height: 4.4rem !important;
  width: 2.15rem !important;
  z-index: 5;
  margin-left: -22px !important;
  margin-right: -22px !important;
  animation: select_dropdown 0.9s linear;
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
/*做li的动效和暂停、播放按钮的切换*/
.card_box {
  li {
    transition: all 0.4s ease;
    .pause_btn {
      width: 50px;
      height: 50px;
      opacity: 0;
      transition: opacity 0.75s;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -25px 0 0 -25px;
      background: url(../assets/training/pause.png) right center no-repeat;
      background-size: 50px auto;
      border-radius: 50%;
    }

    .play_btn {
      width: 50px;
      height: 50px;
      opacity: 0;
      transition: opacity 0.75s;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -25px 0 0 -25px;
      background: url(../assets/training/play.png) right center no-repeat;
      background-size: 50px auto;
      border-radius: 50%;
    }
  }
  .li_active_center:hover .pause_btn {
    opacity: 1;
    transition: opacity 0.75s;
  }

  .li_active_center:hover .play_btn {
    opacity: 1;
    transition: opacity 0.75s;
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
      position: relative;
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