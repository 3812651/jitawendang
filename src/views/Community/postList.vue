<template>
  <div class="postList-box">
    <div class="postList">
      <Card>
        <Affix>
          <Menu mode="horizontal" active-name="hot" @on-select="menuChange">
            <MenuItem name="hot">
            <Icon type="md-bonfire" />热门</MenuItem>
            <MenuItem name="new">
            <Icon type="md-alarm" />最新</MenuItem>
            <Button type="primary" class="post-btn" style="background-color:#007FFF" @click="modal1=true">写文章</Button>
          </Menu>
        </Affix>
        <div class="itemList">
          <ul id="list-ui">
            <li v-for="item in list" :key="item.id" id="list-li">
              <div class="context-box">
                <div class="info-box">
                  <div class="meta-row">
                    <ul class="meta-list">
                      <li class="meta-item username">{{ item.username }}</li>
                      <li class="meta-item date">{{ item.date }}</li>
                      <li class="meta-item tag">{{ item.tag }}</li>
                    </ul>
                  </div>
                  <div class="info-row title-row">
                    <a class="title" @click="postRead(item.id)">{{item.title}}</a>
                    <div class="briefInfo">{{ item.briefInfo }}</div>
                  </div>
                  <div class="action-row">
                    <ul class="action-list">
                      <li class="item like clickable">
                        <a href="" class="title-box">
                          <Icon color="#b2bac2" type="md-thumbs-up" />
                          <span class="count">222</span>
                        </a>
                      </li>
                      <li class="item comment clickable">
                        <a href="" class="title-box">
                          <Icon color="#b2bac2" type="md-text" />
                          <span class="count">77</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lazy thumb thumb loaded" :style="{backgroundImage: 'url(' + item.url + ')',backgroundSize: 'cover',}"></div>
              </div>
            </li>
          </ul>
          <div class="bottom-tip loading" v-show="isLoading">
            <Icon type="ios-loading" size=18 class="spin-icon-load"></Icon>
            <div>Loading</div>
          </div>
          <div class="bottom-tip arrive-bottom" v-show="isBottom">
            <p>嘿，已经没有数据了，快去发文章吧~~</p>
          </div>
        </div>
      </Card>
      <Modal v-model="modal1" title="发表文章" width="55%">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
          <FormItem label="文章标题：" prop="title">
            <Input v-model="formValidate.title" placeholder="输入文章标题..."></Input>
          </FormItem>
          <FormItem label="文章简介：" prop="briefInfo">
            <Input v-model="formValidate.briefInfo" placeholder="输入文章简介..."></Input>
          </FormItem>
          <FormItem label="文章标签：" prop="tagArray">
            <Tag v-for="item in formValidate.tagArray" color="primary" type="border" :key="item" :name="item" closable @on-close="handleClose">{{ item}}</Tag>
            <Input class="input-new-tag" v-model="inputValue" v-if="inputVisible" ref="saveTagInput" @keyup.enter.native="handleInputConfirm" @on-blur="handleInputConfirm"></Input>
            <Button class="button-new-tag" icon="ios-add" type="dashed" v-else size="small" @click="showInput">New Tag</Button>
          </FormItem>
          <FormItem label="文章内容：" prop="content">
            <tinymceEditor ref="editor" v-model="formValidate.content" :key="tinymceKey"></tinymceEditor>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="text" @click="cancel">取消</Button>
          <Button type="primary" @click="submit()">确定</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import tinymceEditor from "../../components/tinymce-editor";
import api from "../../common/api.js";
export default {
  components: {
    tinymceEditor,
  },
  data() {
    return {
      //所有文章数据
      list: [
        {
          id: 0,
          username: "D2前端技术论坛",
          date: "14天前",
          title: "第十五届 D2 前端技术论坛",
          briefInfo: "前端热爱，技术无界，我们云端相聚",
          url:
            "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
          tag: "视唱练耳",
        },
        {
          id: 1,
          username: "掘金酱",
          date: "2天前",
          title: "掘友福利｜参与活动MySQL书免费送了！",
          briefInfo:
            "掘金社区畅销小册精彩积淀！《MySQL是怎样运行的：从根儿上理解MySQL》终于面世啦！",
          url:
            "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/663b227f6f8b4f249ce44d9c6042c557~tplv-k3u1fbpfcp-watermark.image",
          tag: "视唱练耳",
        },
        {
          id: 2,
          username: "D2前端技术论坛",
          date: "14天前",
          title: "第十五届 D2 前端技术论坛",
          briefInfo: "前端热爱，技术无界，我们云端相聚",
          url:
            "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
          tag: "乐理",
        },
        {
          id: 3,
          username: "D2前端技术论坛",
          date: "14天前",
          title: "第十五届 D2 前端技术论坛",
          briefInfo: "前端热爱，技术无界，我们云端相聚",
          url:
            "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
          tag: "视唱练耳",
        },
        {
          id: 4,
          username: "掘金酱",
          date: "2天前",
          title: "掘友福利｜参与活动MySQL书免费送了！",
          briefInfo:
            "掘金社区畅销小册精彩积淀！《MySQL是怎样运行的：从根儿上理解MySQL》终于面世啦！",
          url:
            "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/663b227f6f8b4f249ce44d9c6042c557~tplv-k3u1fbpfcp-watermark.image",
          tag: "视唱练耳",
        },
        {
          id: 5,
          username: "D2前端技术论坛",
          date: "14天前",
          title: "第十五届 D2 前端技术论坛",
          briefInfo: "前端热爱，技术无界，我们云端相聚",
          url:
            "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
          tag: "乐理",
        },
        {
          id: 6,
          username: "D2前端技术论坛",
          date: "14天前",
          title: "第十五届 D2 前端技术论坛",
          briefInfo: "前端热爱，技术无界，我们云端相聚",
          url:
            "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
          tag: "乐理",
        },
      ],
      tinymceKey: 0, //动态的改变tinymce的key值,回来发帖框时重新渲染组件,以防路由切换回来的时候富文本框消失
      isLoading: false, //显示加载数据提示
      isBottom: false, //是否加载完数据
      view: "", //不同的分类
      modal1: false, //是否显示发帖对话框
      inputVisible: false, //是否显示标签输入框
      inputValue: "", //标签输入框的值
      formValidate: {
        //发帖表单数据对象
        title: "",
        briefInfo: "",
        content: "", //tinymce双向绑定字符串
        tagArray: ["视唱练耳", "乐理"], //文章标签数组
      },
      ruleValidate: {
        //发帖表单验证规则
        title: [
          {
            required: true,
            message: "文章标题不能为空",
            trigger: "blur",
          },
        ],
        briefInfo: [
          {
            required: true,
            message: "文章简介不能为空",
            trigger: "blur",
          },
        ],
        content: [
          {
            required: true,
            message: "文章内容不能为空",
            trigger: "blur",
          },
        ],
        tagArray: [
          {
            required: true,
            message: "至少一个标签",
          },
        ],
      },
      //查询文章数据对象
      queryinfo: {
        query: "",
        pageNum: 1,
        pageSize: 10,
      },
      total: 0, //文章的总数
    };
  },
  methods: {
    //获取文章初始化数据
    async init() {
      this.queryinfo.pageNum = 1; //每次查询的数据都是第一页
      let res = await this.$get({
        url: api.getPostList,
        data: this.queryinfo,
      });
      if (res.err_code !== 0) {
        this.$Message.error("Fail!");
      } else {
        this.$Message.success("获取所有文章成功");
        this.list = res.data;
        for (let val of this.list) {
          val.url =
            "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image";
          val.tag = val.tagArray.join(" / ");
          val.date = this.$moment(val.create_time, "YYYY-MM-DD").fromNow();
        }
        this.total = res.total;
        //设置progress值为1,不然因为没有滚动导致li不可见
        this.$nextTick(() => {
          let rows = document.querySelectorAll(".itemList > ul > li");
          for (let [index, row] of rows.entries()) {
            if (index < 10) {
              row.style.setProperty("--progress", 1);
            }
          }
        });
      }
    },
    async submit() {
      let token = window.localStorage.getItem("token");
      if (token == null) {
        this.$Message.error("请先登录");
      } else {
        if (this.formValidate.tagArray.length == 0) {
          this.$Message.error("至少一个标签");
        } else {
          let res = await this.$post({
            url: api.posting,
            data: this.formValidate,
          });
          if (res.err_code !== 0) {
            this.$Message.error("Fail!");
          } else {
            this.$Message.success("发表文章成功");
            this.modal1 = false;
            this.init();
            //初始化数据
            window.tinymce.get("tinymce-editor").setContent(""); //清空tinymce富文本框内容
            for (let key in this.formValidate) {
              this.formValidate[key] = "";
            }
            this.formValidate.tagArray = ["视唱练耳", "乐理"]; //tagArray默认数据
          }
        }
      }
    },
    cancel() {
      this.modal1 = false;
      this.$Message.info("Clicked cancel");
    },
    // 确定标签输入框的内容
    handleInputConfirm() {
      const repeatTag = this.formValidate.tagArray.some((item) => {
        return item === this.inputValue.trim();
      });
      if (this.inputValue.trim().length === 0 || repeatTag === true) {
        this.inputVisible = false;
        this.inputValue = "";
      } else {
        this.inputVisible = false;
        this.formValidate.tagArray.push(this.inputValue.trim());
      }
    },
    //删除标签;
    handleClose(event, name) {
      const index = this.formValidate.tagArray.indexOf(name);
      this.formValidate.tagArray.splice(index, 1);
    },
    //展示标签输入框
    showInput() {
      this.inputVisible = true;
      this.inputValue = "";
      this.$nextTick(() => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    menuChange(name) {
      this.view = name;
      console.log(this.view);
    },
    postRead(id) {
      this.$router.push({
        path: `/Community/postRead/${id}`,
      });
    },
    scroll() {
      const html = document.documentElement;
      let beforeScrollTop = html.scrollTop; //页面刚进来的滚动条位置
      document.addEventListener("scroll", async () => {
        let afterScrollTop = html.scrollTop;
        let delta = afterScrollTop - beforeScrollTop; //滚动前后的距离,大于0证明滚动条向下
        if (delta > 0) {
          //如果滚动条方向往下并触底就开始请求数据
          let scrolled =
            html.scrollTop / (html.scrollHeight - html.clientHeight); //滚动的位置,从0到1
          // let a = html.scrollHeight - (html.clientHeight + html.scrollTop); //和底部的距离
          let n = this.list.length; //文章的总数
          if (scrolled > 0.999 && n < this.total) {
            // console.log('update')
            this.isLoading = true;
            this.queryinfo.pageNum = 2;
            let res = await this.$get({
              url: api.getPostList,
              data: this.queryinfo,
            });
            if (res.err_code !== 0) {
              this.$Message.error("Fail!");
            } else {
              this.$Message.success("滚动触底并获取所有文章成功");
              this.isLoading = false;

              for (let val of res.data) {
                val.url =
                  "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image";
                val.tag = val.tagArray.join(" / ");
                val.date = this.$moment(
                  val.create_time,
                  "YYYY-MM-DD"
                ).fromNow();
                this.list.push(val);
              }
            }
          } else if (n >= this.total) {
            this.isBottom = true;
          }
          let updateRows = document.querySelectorAll(".itemList > ul > li");
          let total = 1 / updateRows.length;
          for (let [index, row] of updateRows.entries()) {
            if (index > 9) {
              //如果是大于文章总数就开始加动画效果
              let start = total * index;
              let end = total * (index + 1);
              let progress = (scrolled - start) / (end - start);
              if (progress >= 1) progress = 1;
              if (progress <= 0) progress = 0;
              row.style.setProperty("--progress", progress);
            }
          }
        }
        beforeScrollTop = afterScrollTop;
      });
    },
  },
  mounted() {
    this.init();
    this.scroll();
    this.tinymceKey++;
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/publicVar.less";
.input-new-tag {
  width: 90px;
  /deep/.ivu-input {
    height: 24px;
  }
}
.button-new-tag {
  height: 24px;
}

.spin-icon-load {
  animation: ani-spin 1s linear infinite;
}
@keyframes ani-spin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}
/deep/.ivu-card-body {
  padding-bottom: 0.6rem;
}
.bottom-tip {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.loading {
  color: #2d8cf0;
  vertical-align: middle;
  text-align: center;
}
.arrive-bottom {
  color: #c3cbd6;
}
#list-ui {
  overflow: hidden;
  --progress: 0;
  --color: 0.4;
  .spin-icon-load {
    position: absolute;
    bottom: 20px;
    z-index: 9999;
  }
  #list-li {
    transform: translateY(calc(60px * (1 - var(--progress))));
    opacity: var(--progress);
    transition: 0.8s all ease-in-out;
    background-color: rgba(0, 0, 0, calc(var(--color) - var(--progress)));
  }
}
ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

.post-btn {
  position: absolute;
  z-index: 9999;
  top: 0.14rem;
  right: 0.08rem;
}

/deep/.ivu-modal {
  top: 0.17rem;
}

//图钉阴影
/deep/.ivu-affix {
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
}

.action-list > .item.clickable:hover {
  background-color: #f7f8fa;
}

.context-box:hover {
  background-color: rgba(0, 0, 0, 0.01);
}

.action-list > .item.comment {
  margin-left: -1px;
  padding: 0;
  border-left: 0;
}

.action-list > .item .count {
  color: #b2bac2;
  margin-left: 0.02em;
  font-weight: 700;
}

.action-list > .item .title-box {
  display: flex;
  align-items: center;
  padding: 0 0.08rem;
  height: 100%;
}

.action-list > .item {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 0.25rem;
  font-size: 0.12rem;
  line-height: 1;
  white-space: nowrap;
  color: #b2bac2;
  border-radius: 1px;
  border: 1px solid #edeeef;
}

.action-list {
  display: inline-flex;
  white-space: nowrap;
}

.itemList {
  li:not(:last-child) {
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  }
}

.context-box {
  display: flex;
  align-items: center;
  padding: 0.15rem 0.2rem;
  cursor: pointer;
  min-width: 0;

  .info-box {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .meta-row .meta-list {
      font-size: 12px;
      color: #b2bac2;
      display: flex;
      align-items: baseline;
      white-space: nowrap;

      .username:hover {
        color: #007fff;
      }

      .meta-item:not(:last-child):after {
        content: "·";
        margin: 0 0.4em;
        color: #b2bac2;
      }

      .tag {
        color: #ff9900;
      }
    }

    .title-row {
      margin: 0.04rem 0 0.08rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .info-row {
      .title {
        margin: 0.05rem 0 0.1rem;
        font-size: 0.16rem;
        font-weight: 600;
        line-height: 1.2;
        color: #2e3135;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .title:hover {
        text-decoration: underline;
      }

      // .title:visited {
      //     color: #909090;
      // }

      .briefInfo {
        font-size: 13px;
        color: #b2bac2;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .thumb {
    flex: 0 0 auto;
    width: 0.5rem;
    height: 0.5rem;
    margin-left: 0.2rem;
    background-color: #fff;
    border-radius: 2px;
  }

  .thumb {
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .lazy {
    position: relative;
  }

  .lazy.loaded:before {
    opacity: 0;
    pointer-events: none;
  }

  .lazy:not(.immediate):before {
    transition: opacity 0.2s;
  }

  .lazy:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: inherit;
    border-radius: inherit;
  }
}

.postList {
  @margin-auto();
}
</style>
