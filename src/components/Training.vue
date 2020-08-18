<template>
  <div class="training_box_body">
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
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
$(() => {
  $("li").click(function () {
    let id = parseInt($(this).attr("id"));
    $(this).addClass("li_active_center").siblings().removeClass("li_active_center");
    $(this).prev().addClass("li_active_left").siblings().removeClass("li_active_left");
    $(this).next().addClass("li_active_right").siblings().removeClass("li_active_right");
    
    let left_overflow_px = (id -4)*170 + 85 
    console.log(`-${left_overflow_px}px`);
    $("ul").css('left',`-${left_overflow_px}px`)
  });
});
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {
    $('#4').addClass("li_active_center")
    $('#4').prev().addClass("li_active_left");
    $('#4').next().addClass("li_active_right");
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

.training_box_body {
  @flex();
  height: 100%;
  .card_box {
    height: 4.4rem;
    width: 100%;
    // background-color: pink;
    position: absolute;
    // left: -0.7rem;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 3;
    ul {
      display: flex;
      align-items: center;
      position: absolute;
      left: -85px;
    }
    li {
      width: 1.7rem;
      height: 3.3rem;
      background-color: #fff;
      margin: 0 6px;
      border-radius: 13px;
      box-shadow: 0px 2px 45px #c9ccd5;
      svg{
        pointer-events: none;
      }
    }
  }
  .training_box {
    background-color: #e6e9f0;
    position: relative;
    width: 9.5rem;
    height: 6.2rem;
    border-radius: 8px;
    overflow: hidden;
    .center {
      height: 100%;
      width: 33%;
      position: absolute;
      left: 33.3%;
      box-shadow: 0px 2px 45px #c9ccd5;
      background-color: #e6e9f0;
      z-index: 1;
    }
    .left {
      height: 100%;
      width: 33%;
      box-shadow: 0px 2px 45px #c9ccd5;
      background-color: #e6e9f0;
      position: absolute;
      left: 16.653%;
    }
    .right {
      height: 100%;
      width: 33%;
      box-shadow: 0px 2px 45px #c9ccd5;
      background-color: #e6e9f0;
      position: absolute;
      right: 16.653%;
    }
  }
}
</style>