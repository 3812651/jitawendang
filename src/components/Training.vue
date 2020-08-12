<template>
  <div class="training_box_body">
    <div class="training_box">
      <div class="left"></div>
      <div class="center"></div>
      <div class="right"></div>
      <div class="card_box">
        <ul>
          <li></li>
          <li></li>
          <li>
            <svg viewBox="40 74 170 310" width="340" height="620">
              <image xlink:href="../assets/sapiens.svg" width="100%" height="100%" />
            </svg>
          </li>
          <li></li>
          <li></li>
          <li></li>
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

.training_box_body {
  @flex();
  height: 100%;
  .card_box {
    height: 3.1rem;
    width: 100%;
    // background-color: pink;
    position: absolute;
    top: 27%;
    z-index: 3;
    ul {
      display: flex;
      height: 100%;
    }
    li {
      width: 170px;
      height: 100%;
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