<template>
  <Card class="card">
    <Tabs value="name1">
      <TabPane label="基础和弦" name="name1">
        <Tag color="primary">和弦:三个或以上的音组合在一起</Tag>
        <p class="success">以下例子以C大调里面的和弦为例(看不懂几度音的到音程复习)</p>
        <h3>三和弦:由三个音按照三度关系堆叠的和弦(根音、三度音、五度音)</h3>
        <Divider />
        <Table :columns="columns1" :data="data1"></Table>
        <h3>七和弦:由四个音按照三度关系堆叠的和弦(根音、三度音、五度音、七度音)</h3>
        <Divider />
        <p class="tip">注意:四个音的和弦之所以不叫四和弦,是因为第四个音和第一个音的距离是七度,所以叫七和弦,同理九和弦也是</p>
        <Table :columns="columns2" :data="data2"></Table>
        <Tag color="primary" style="margin-top:0.5rem">七和弦也可以这样记「以根音为C做例子」</Tag>
        <img :src="seven" alt />
        <Tag color="primary" style="margin-top:0.5rem">平常用的时候可以记住这样的规律</Tag>
        <img :src="sevenf" class="sevenf" />
      </TabPane>
      <TabPane label="变化和弦" name="name2"></TabPane>
      <TabPane label="借用和弦" name="name3"></TabPane>
      <TabPane label="附属和弦" name="name4"></TabPane>
    </Tabs>
  </Card>
</template>
<script>
import seven from "../../../assets/document/seven.png";
import sevenf from "../../../assets/document/sevenf.png";
export default {
  data() {
    return {
      seven: seven,
      sevenf: sevenf,
      columns1: [
        {
          title: "例子",
          key: "1",
        },
        {
          title: "和弦类型",
          key: "2",
        },
        {
          title: "组成音",
          key: "3",
        },
        {
          title: "三度音",
          key: "4",
        },
        {
          title: "五度音",
          key: "5",
        },
        {
          title: "符号",
          key: "6",
        },
      ],
      data1: [
        {
          1: "C",
          2: "大三和弦",
          3: "135",
          4: "大三度",
          5: "完全五度",
          6: "省略",
        },
        {
          1: "Dm",
          2: "小三和弦",
          3: "246",
          4: "小三度",
          5: "完全五度",
          6: "minor(简写：m)",
        },
      ],
      columns2: [
        {
          title: "例子",
          key: "1",
        },
        {
          title: "和弦类型",
          key: "2",
        },
        {
          title: "组成音",
          key: "3",
        },
        {
          title: "三度音",
          key: "4",
        },
        {
          title: "五度音",
          key: "5",
        },
        {
          title: "七度音",
          key: "6",
        },
        {
          title: "符号",
          key: "7",
        },
      ],
      data2: [
        {
          1: "Cmaj7",
          2: "大七和弦",
          3: "1357",
          4: "大三度",
          5: "完全五度",
          6: "大七度",
          7: "maj7（简写M7）",
        },
        {
          1: "G7",
          2: "属七和弦",
          3: "5724",
          4: "大三度",
          5: "完全五度",
          6: "小七度",
          7: "7",
        },
        {
          1: "Dm7",
          2: "小七和弦",
          3: "2461",
          4: "小三度",
          5: "完全五度",
          6: "小七度",
          7: "minor7（简写m7）",
        },
        {
          1: "bm7-5",
          2: "半减七和弦",
          3: "7246",
          4: "小三度",
          5: "减五度",
          6: "小七度",
          7: "m7-5",
        },
        {
          1: "bdim7",
          2: "减七和弦",
          3: "724(b6)",
          4: "小三度",
          5: "减五度",
          6: "减七度",
          7: "dim7",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
@import "../../../assets/css/global.less";
h3 {
  margin: 0.4rem 0;
}
img {
  width: 5rem;
  height: 2.7rem;
}
.sevenf {
  vertical-align: middle;
  margin-left: 0.35rem;
  width: 3.5rem;
  height: 0.8rem;
}
</style>