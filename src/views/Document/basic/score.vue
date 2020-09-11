<template>
  <Card class="card">
    <Tabs value="name1">
      <TabPane label="六线谱" name="name1">
        <Tag color="primary">吉他谱左上角的信息有如下四个</Tag>
        <div class="content">
          <div>
            <Tag color="primary" type="dot">do=C</Tag>
            <Tag color="primary" type="dot">Capo=1</Tag>
            <div class="notes_box">
              <svg-icon iconClass="notes" class="notes" />
              <span>= 85</span>
            </div>
            <Tag color="primary" type="dot">Standard tuning</Tag>
          </div>
          <div class="content_text">
            <p>以c为第一个音往后构建音阶</p>
            <p>变调夹夹在一品</p>
            <p>每分钟85拍</p>
            <p>标准调弦的意思,一般不写,如果是其他调弦方式会写出来</p>
          </div>
        </div>
        <Tag color="primary">关于和弦按法</Tag>
        <img :src="chord" alt />
        <Tag color="primary">关于扫弦</Tag>
        <img :src="sweep" alt />
      </TabPane>
      <TabPane label="时值" name="name2">
        <img :src="time" alt />
      </TabPane>
    </Tabs>
  </Card>
</template>
<script>
import chord from "../../../assets/document/chord.png";
import sweep from "../../../assets/document/sweep.png";
import time from "../../../assets/document/time.png";
export default {
  data() {
    return {
      chord: chord,
      sweep: sweep,
      time: time,
    };
  },
};
</script>
<style lang="less" scoped>
.notes {
  width: 0.32rem !important;
  height: 0.32rem !important;
}
/deep/.ivu-card-bordered{
    border: none;
}
/deep/.ivu-tag {
  font-size: 14px;
  margin-bottom: 0.2rem;
}
/deep/.ivu-tag-dot {
  color: #17233d !important;
}
.card {
  width: 100%;
  height: calc(100% - 0.7rem);
  margin-top: 10px;
  overflow-y: scroll;
  img {
    display: block;
  }
  .content {
    display: flex;
    div:nth-child(1) {
      width: 1.5rem;
      .notes_box {
        display: flex;
        height: 0.32rem;
        width: 0.9rem;
        margin-bottom: 0.2rem;
        border: 1px solid #e8eaec;
        border-radius: 4px;
        span {
          display: inline-block;
          line-height: 0.32rem;
        }
      }
    }
    .content_text {
      flex-grow: 1;
      margin-left: 1rem;
      font-size: 14px;
      color: #515a6e;
      p {
        line-height: 0.32rem;
        margin-bottom: 0.2rem;
      }
    }
  }
}
.card::-webkit-scrollbar {
    width: .08rem;
    height: .08rem;
    background-color: #bce0f0;
}
.card::-webkit-scrollbar-thumb {
    background-color: #2D8CF0;
    border-radius: .08rem;
}
</style>