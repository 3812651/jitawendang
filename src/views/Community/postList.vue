<template>
<div class="postList">
    <Card class="postListCard">
        <Affix>
            <Menu mode="horizontal" active-name="hot" @on-select="menuChange">
                <MenuItem name="hot">
                <Icon type="md-bonfire" />热门</MenuItem>
                <MenuItem name="new">
                <Icon type="md-alarm" />最新</MenuItem>
                <Button type="primary" class="post-btn" style="background-color:#007FFF" @click="modal1=true">写文章</Button>
            </Menu>
        </Affix>
        <div class="itemList" v-for="item in list" :key="item.id">
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
                        <div class="description">{{ item.description }}</div>
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
        </div>
    </Card>
    <Modal v-model="modal1" title="发帖" @on-ok="ok" @on-cancel="cancel" width="50%">
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <FormItem label="文章标题" prop="title">
                <Input v-model="formValidate.title" placeholder="输入文章标题..."></Input>
            </FormItem>
            <FormItem label="文章简介" prop="brief">
                <Input v-model="formValidate.brief" placeholder="输入文章简介..."></Input>
            </FormItem>
        </Form>
    </Modal>
</div>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                    id: 0,
                    username: "D2前端技术论坛",
                    date: "14天前",
                    title: "第十五届 D2 前端技术论坛",
                    description: "前端热爱，技术无界，我们云端相聚",
                    url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
                    tag: "视唱练耳",
                },
                {
                    id: 1,
                    username: "掘金酱",
                    date: "2天前",
                    title: "掘友福利｜参与活动MySQL书免费送了！",
                    description: "掘金社区畅销小册精彩积淀！《MySQL是怎样运行的：从根儿上理解MySQL》终于面世啦！",
                    url: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/663b227f6f8b4f249ce44d9c6042c557~tplv-k3u1fbpfcp-watermark.image",
                    tag: "视唱练耳",
                },
                {
                    id: 2,
                    username: "D2前端技术论坛",
                    date: "14天前",
                    title: "第十五届 D2 前端技术论坛",
                    description: "前端热爱，技术无界，我们云端相聚",
                    url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
                    tag: "乐理",
                },
                {
                    id: 3,
                    username: "D2前端技术论坛",
                    date: "14天前",
                    title: "第十五届 D2 前端技术论坛",
                    description: "前端热爱，技术无界，我们云端相聚",
                    url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
                    tag: "视唱练耳",
                },
                {
                    id: 4,
                    username: "掘金酱",
                    date: "2天前",
                    title: "掘友福利｜参与活动MySQL书免费送了！",
                    description: "掘金社区畅销小册精彩积淀！《MySQL是怎样运行的：从根儿上理解MySQL》终于面世啦！",
                    url: "https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/663b227f6f8b4f249ce44d9c6042c557~tplv-k3u1fbpfcp-watermark.image",
                    tag: "视唱练耳",
                },
                {
                    id: 5,
                    username: "D2前端技术论坛",
                    date: "14天前",
                    title: "第十五届 D2 前端技术论坛",
                    description: "前端热爱，技术无界，我们云端相聚",
                    url: "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2d46d6dda454b159d0eec33cfc28bc4~tplv-k3u1fbpfcp-watermark.image",
                    tag: "乐理",
                },
            ],
            view: "",
            modal1: false, //是否显示发帖对话框
            formValidate: { //发帖表单数据对象
                title: '',
                brief: ''
            },
            ruleValidate: { //发帖表单验证规则
                title: [{
                    required: true,
                    message: '文章标题不能为空',
                    trigger: 'blur'
                }],
                brief: [{
                    required: true,
                    message: '文章简介不能为空',
                    trigger: 'blur'
                }]
            }
        };
    },
    methods: {
        menuChange(name) {
            this.view = name;
            console.log(this.view);
        },
        postRead(id) {
            this.$router.push({
                path: `/Community/postRead/${id}`
            })
        },
        ok() {
            this.$Message.info('Clicked ok');
        },
        cancel() {
            this.$Message.info('Clicked cancel');
        }
    }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/publicVar.less";

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
    top: .14rem;
    right: .08rem;
}

//图钉阴影
/deep/.ivu-affix {
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, .05);
}

.action-list>.item.clickable:hover {
    background-color: #f7f8fa;
}

.context-box:hover {
    background-color: rgba(0, 0, 0, 0.01);
}

.action-list>.item.comment {
    margin-left: -1px;
    padding: 0;
    border-left: 0;
}

.action-list>.item .count {
    color: #b2bac2;
    margin-left: 0.02em;
    font-weight: 700;
}

.action-list>.item .title-box {
    display: flex;
    align-items: center;
    padding: 0 0.08rem;
    height: 100%;
}

.action-list>.item {
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

.itemList:not(:last-child) {
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
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

            .description {
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

    .postListCard::-webkit-scrollbar {
        width: 0.08rem;
        height: 0.08rem;
        background-color: #bce0f0;
    }

    .postListCard::-webkit-scrollbar-thumb {
        background-color: #2d8cf0;
        border-radius: 0.08rem;
    }
}
</style>
