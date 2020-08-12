<template>
  <div class="training_box_body">
    <div class="training_box">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
      <div class="card_box">
        <ul>
          <li>
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li>
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens2.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li class="li_active_left">
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li class="li_active_center">
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens1.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li class="li_active_right">
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li class="li_active_rightlast">
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens2.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li>
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li>
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
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
@flex: {
  display: flex;
  justify-content: center;
  align-items: center;
};
.li_active_center {
  height: 4.4rem !important;
  width: 213px !important;
  z-index: 5;
  margin-left: -22px !important;
}

.li_active_left {
  z-index: 4;
  margin-left: -70px !important;
  height: 3.7rem !important;
  width: 175px !important;
}
.li_active_right {
  z-index: 4;
  margin-left: -22px !important;
  height: 3.7rem !important;
  width: 175px !important;
}
.li_active_rightlast {
  z-index: 3;
  margin-left: -70px !important;
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
      width: 170px;
      height: 3.3rem;
      background-color: #fff;
      margin: 0 6px;
      border-radius: 13px;
      box-shadow: 0px 2px 45px #c9ccd5;
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