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
      <TabPane label="变化和弦" name="name2">
        <h3>add:往和弦里面添加任何一个音！包括各种升降音,或者不在调内的音</h3>
        <Divider />
        <p class="success">比如:Cadd2是在C大三和弦的基础上,直接add一个2音!</p>
        <h3>sus(挂留和弦):将和弦里面的3音挂在2或4音,而原来的3音则直接丢弃</h3>
        <Divider />
        <p class="success">比如:Csus2是在C大三和弦的基础上,直接将3音挂在2音!</p>
        <p class="tip">Csus其实就是Csus4,因为不声明将3音挂在哪里,就默认挂在4音</p>
        <h3>omit:省略和弦里面某一个音！</h3>
        <Divider />
        <p class="success">比如:Cmaj7(omit5)是省略5音的意思！</p>
        <h3>转位和弦:将和弦的三音、五音或七音其中一个转为低音(低音是和弦最低的那个音)</h3>
        <Divider />
        <p class="question">
          比如C(1 3 5)的第一转位和弦C/E(3 5 1[比原来的1高八度]):就是把三度音看作低音,根音升高一个八度
          <br />比如C(1 3 5)的第二转位和弦C/G(5 1[比原来的1高八度] 3[比原来的3高八度]):就是把五度音看作低音,根音和三度音升高一个八度
        </p>
        <p class="tip">以根音为低音的和弦叫原位和弦,其他和弦内音做低音才有了转位和弦</p>
      </TabPane>
      <TabPane label="借用和弦" name="name3">
        <h3>
          借用和弦:拿同一「主音」,但不同「调式」的和弦来用
          <span class="author">----本章节素材来自官大為(Wiwi Kuan).好和弦系列</span>
        </h3>
        <Divider />
        <img :src="borrow" />
        <Tag
          color="primary"
          style="margin-top: 0.3rem"
        >你可以尝试下面的例子(装饰音可以不要),用C小调的和弦替换掉C大调的1645和声进行的「同级」和弦</Tag>
        <img :src="borrowExample" />
      </TabPane>
      <TabPane label="附属和弦" name="name4">
        <h3>副属和弦:实际上它是个装饰品,从你要接的和弦往上数五度音的属七和弦就是副属和弦</h3>
        <Divider />
        <p class="success">
          比如有一个和声进行C-Am-F-G,你就可以在C和Am间插一个副属和弦,Am往上数五度音的属七和弦就是E7
          <br />此时和声进行变成了C-E7-Am-F-G
        </p>
        <h3>副属和弦的替代品:「三全音代理」和弦</h3>
        <Divider />
        <Tag color="primary">「三全音代理」和弦意思就是跟副属和弦都一样有三个全音的和弦</Tag>
        <p class="tip">「三全音代理」和弦：从你要接的和弦前面插入升高半音的属七和弦(只要是属和弦都可以)</p>
        <p class="success">比如有一个和声进行C-Am-F-G,你就可以在Am前面加一个#A7和弦</p>
      </TabPane>
    </Tabs>
  </Card>
</template>
<script>
import seven from "../../../assets/document/seven.png";
import sevenf from "../../../assets/document/sevenf.png";
import borrow from "../../../assets/document/borrow.png";
import borrowExample from "../../../assets/document/borrowExample.png";
export default {
  data() {
    return {
      seven: seven,
      sevenf: sevenf,
      borrow: borrow,
      borrowExample: borrowExample,
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
  margin: 0.3rem 0;
}
img {
  width: 5rem;
  height: 2.7rem;
}
.sevenf {
  width: 3.8rem;
  height: 0.8rem;
}
</style>