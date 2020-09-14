<template>
  <Card class="card">
    <Tag color="primary">音程: 两个音的音高距离,单位名称是度</Tag>
    <div class="content">
      <h3>
        度的概念:从一个音的名字念到另外一个音的名字,总共念了几个字,他们两个音的距离就是几度(
        <span
          class="author"
        >--本章节理念来自官大為(Wiwi Kuan).好和弦系列</span>)
      </h3>
      <Divider />
      <p class="success">
        比如:Do 到 Fa,念了四个字,所以他们的距离就是4度
        <br />比如:Re 到 Fa,念了三个字,所以他们的距离就是3度
      </p>
      <p class="tip">
        有些同学可能就会疑惑:明明「bMi」等于「#Re」啊,为什么Do 到「bMi」和 Do到「#Re」,一个是小3度,一个是增二度
        <br />注意了!:度跟升降号没关,只跟音的音名有关
      </p>
      <p class="question">问题来了,如果音的前面加上升降号了怎么办?请看下面</p>
      <h3>度的形容词:为了描述音程中出现升降号时而产生</h3>
      <Divider />
      <p class="success">先把大调音阶里,每一个音到根音的距离,分成「完全/纯」和「大」两组</p>
      <Table :columns="columns1" :data="data1"></Table>
      <p class="success">
        「完全」组：第「1、4、5、8」个音到根音
        <br />「大」组：第「2、3、6、7」个音到根音
      </p>
      <p class="tip">
        减 --1458(「完全」组)-- 增(比完全要少半音的就是减,比完全要多半音的就是增,下面同理)
        <br />减 --小 --2367(「大」组)-- 增
      </p>
      <p class="question">
        比如:Do到bMi,念了三个字确定是3度,根据分组bMi属于「大」的一组,但是因为bMi比Mi要小，所以是小3度
        <br />比如:Mi到#Xi,念了五个字确定是5度,根据分组#Xi属于「完全」组（把Mi看作根音，#Xi是它的第五个音）,但是因为#Xi比Xi要大,确定是增5度
      </p>
    </div>
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
      columns1: [
        {
          title: "Do 到根音",
          key: "1",
        },
        {
          title: "Re到根音",
          key: "2",
        },
        {
          title: "Mi到根音",
          key: "3",
        },
        {
          title: "Fa到根音",
          key: "4",
        },
        {
          title: "So到根音",
          key: "5",
        },
        {
          title: "La到根音",
          key: "6",
        },
        {
          title: "Xi到根音",
          key: "7",
        },
        {
          title: "(高八度)Do到根音",
          key: "8",
        },
      ],
      data1: [
        {
          1: "完全一度",
          2: "大二度",
          3: "大三度",
          4: "完全四度",
          5: "完全五度",
          6: "大六度",
          7: "大七度",
          8: "完全八度",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/global.less";
.notes {
  width: 0.32rem !important;
  height: 0.32rem !important;
}
/deep/.ivu-card-bordered {
  border: none;
}
/deep/.ivu-tag {
  font-size: 0.14rem;
  margin-bottom: 0.2rem;
}
/deep/.ivu-tag-dot {
  color: #17233d !important;
}

.content {
  @flex_column();
}
</style>