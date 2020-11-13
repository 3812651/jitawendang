<template>
<div class="container">
    <div class="postRead">
        <div class="main-area article-area shadow">
            <article class="article">
                <div class="author-info-block">
                    <div class="lazy avatar avatar loaded" :style="{backgroundImage:'url('+avatar+')'}"></div>
                    <div class="author-info-box">
                        <div class="username username ellipsis">
                            <span class="name" style="max-width: calc(100% - 50px)">李小龙</span>
                        </div>

                        <div class="meta-box">
                            <span>2020年11月12号</span>
                            <span class="views-count">阅读</span>
                            <span>666</span>
                        </div>
                    </div>
                    <Button type="success" size="small" @click="follow" v-if="isfollow">已关注</Button>
                    <Button type="warning" ghost size="small" @click="follow" v-else>关注</Button>

                </div>
            </article>
        </div>
        <div class="sidebar">
            <div class="sidebar-block author-block shadow">
                <div class="block-title">关于作者
                    <Icon color="#f90" type="md-ribbon" />
                </div>
                <div class="block-body">
                    <a href="" class="user-item" target="_blank">
                        <div class="lazy avatar avatar loaded" :style="{backgroundImage:'url('+avatar+')'}"></div>
                        <div class="info-box">
                            <a class="username"><span class="name">李小龙</span> </a>
                            <p class="desc">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        </div>
                    </a>
                    <div class="stat-item item getZanbox">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" class="icon">
                            <g fill="none" fill-rule="evenodd" transform="translate(0 .57)">
                                <ellipse cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57"></ellipse>
                                <path fill="#7BB9FF" d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"></path>
                            </g>
                        </svg>
                        <span class="content">获得点赞<span class="count">438</span></span>
                    </div>
                    <div class="stat-item item">
                        <svg width="25" height="25" viewBox="0 0 25 25" class="icon">
                            <g fill="none" fill-rule="evenodd">
                                <circle cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle>
                                <path fill="#7BB9FF" d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"></path>
                            </g>
                        </svg>
                        <span class="content">文章被阅读<span class="count">6666</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            isfollow: false,
            avatar: 'https://mirror-gold-cdn.xitu.io/168e082aad182978be4?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
        }
    },
    methods: {
        follow() {
            this.isfollow = this.isfollow == false ? true : false
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../assets/css/publicVar.less";

.author-block {
    .block-body {
        padding: .13rem;

        .getZanbox {
            margin-bottom: .08rem;
        }

        .stat-item {

            .content {
                font-size: .16rem;
                color: #000;
            }

            .count {
                margin: 0 .35em;
                font-weight: 500;
            }

            .icon {
                margin-right: .2rem;
            }
        }

        .item {
            display: flex;
            align-items: center;
        }

        .user-item {
            display: flex;
            align-items: center;
            margin-bottom: .13rem;

            .avatar {
                flex: 0 0 auto;
                margin-right: .1rem;
                width: .6rem;
                height: .6rem;
                border-radius: 50%;
            }

            .desc {
                font-size: .12rem;
                height: .35rem;
                color: #72777b;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }
    }

}

.lazy.loaded:before {
    opacity: 0;
    pointer-events: none;
}

.lazy:not(.immediate):before {
    transition: opacity .2s;
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

.username {
    width: 100%;
    font-size: .16rem;
    font-weight: 700;
    color: #333;

    .name {
        display: inline-block;
        vertical-align: top;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}

.author-info-block {
    display: flex;
    align-items: center;
    margin-bottom: .2rem;

    .avatar {
        flex: 0 0 auto;
        margin-right: .1rem;
        width: .333rem;
        height: .333rem;
        border-radius: 50%;
    }

    .author-info-box {
        min-width: 0;
        flex-grow: 1;
        flex: 1;

        .meta-box {
            font-size: .13rem;
            color: #909090;
        }

        .views-count {
            margin: 0 .05rem 0 .2rem;
        }

        .ellipsis {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

.lazy {
    position: relative;
}

.avatar,
.avatar.xmas:after {
    background-position: 50%;
    background-repeat: no-repeat;
}

.avatar {
    display: inline-block;
    position: relative;
    background-size: cover;
    background-color: #eee;
}

.sidebar {
    position: absolute;
    top: 0;
    right: 0;
    width: 2.4rem;

    .sidebar-block:not(.pure) {
        background-color: #fff;

        .block-title {
            padding: .1rem .13rem;
            font-size: .16rem;
            color: #333;
            border-bottom: 1px solid hsla(0, 0%, 58.8%, .1);
        }
    }

    .sidebar-block {
        position: relative;
        margin-bottom: 1.5rem;
        border-radius: 2px;
    }
}

.article {
    display: block;
    margin-bottom: .3rem;
}

.article-area {
    margin-bottom: .15rem;
    padding: .2rem .2rem 0;
}

.main-area {
    position: relative;
    width: 700px;
    height: 700px; //记得删除
    max-width: 100%;
    background-color: #fff;
    border-radius: 2px;
    box-sizing: border-box;
}

.container {
    @margin-auto();
}

.shadow {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .05);
}
</style>
