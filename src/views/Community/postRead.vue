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
        <div class="article-suspended-panel">
            <div class="like-btn panel-btn like-adjust with-badge" badge="174"></div>
            <div class="comment-btn panel-btn comment-adjust with-badge" badge="109"></div>
            <div class="collect-btn panel-btn">
                <!---->
            </div>
            <div class="share-title">分享</div>
            <div class="weibo-btn share-btn panel-btn"></div>
            <div class="qq-btn share-btn panel-btn"></div>
            <div class="wechat-btn share-btn panel-btn">
                <img src="" class="wechat-qr-code-img shadow" style="display:none;">
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
            avatar: 'https://mirror-gold-cdn.xitu.io/16beee0a51718efb050?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1'
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

.article-suspended-panel {
    position: fixed;
    margin-left: -.7rem;
    top: 2.3rem;

    .share-title {
        margin: .25rem 0 .1rem;
        font-size: .1rem;
        text-align: center;
        color: #c6c6c6;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .panel-btn.like-btn.like-adjust {
        background-position: 53% 46%;
    }

    .panel-btn.comment-btn.comment-adjust {
        background-position: 50% 55%;
    }

    .panel-btn.like-btn {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuODc0IDYuMDQ0VjE1aC0xLjczQy41MTMgMTUgMCAxNC4zODIgMCAxMy42MjRWNy41MjljMC0uNzkuNTM1LTEuNDg1IDEuMTQzLTEuNDg1aDEuNzMxek03LjYwNyAxLjI1QzcuNzIuNTA3IDguMzQ0LS4wMTMgOS4wMyAwYy45OC4wMTkgMS41NjMuODMzIDEuNzY2IDEuMjM1LjM3LjczNS4zOCAxLjk0Ni4xMjYgMi43MjQtLjIzLjcwNC0uNzYxIDEuNjI5LS43NjEgMS42MjloMy45ODJjLjQyIDAgLjgxMS4yMDYgMS4wNzIuNTYzYTEuNSAxLjUgMCAwIDEgLjIzMiAxLjI3MmwtMS44MDEgNi41MTNjLS4xNjQuNjI3LS43MDcgMS4wNjQtMS4zMiAxLjA2NEg0LjVWNS44OThDNi4yOTkgNS41MSA3LjQwNCAyLjU5IDcuNjA3IDEuMjQ5eiIvPgo8L3N2Zz4K);
    }

    .panel-btn.like-btn:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDE2IDE1Ij4KICAgIDxwYXRoIGZpbGw9IiM4QTkzQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuODc0IDYuMDQ0VjE1aC0xLjczQy41MTMgMTUgMCAxNC4zODIgMCAxMy42MjRWNy41MjljMC0uNzkuNTM1LTEuNDg1IDEuMTQzLTEuNDg1aDEuNzMxek03LjYwNyAxLjI1QzcuNzIuNTA3IDguMzQ0LS4wMTMgOS4wMyAwYy45OC4wMTkgMS41NjMuODMzIDEuNzY2IDEuMjM1LjM3LjczNS4zOCAxLjk0Ni4xMjYgMi43MjQtLjIzLjcwNC0uNzYxIDEuNjI5LS43NjEgMS42MjloMy45ODJjLjQyIDAgLjgxMS4yMDYgMS4wNzIuNTYzYTEuNSAxLjUgMCAwIDEgLjIzMiAxLjI3MmwtMS44MDEgNi41MTNjLS4xNjQuNjI3LS43MDcgMS4wNjQtMS4zMiAxLjA2NEg0LjVWNS44OThDNi4yOTkgNS41MSA3LjQwNCAyLjU5IDcuNjA3IDEuMjQ5eiIvPgo8L3N2Zz4K);
    }

    .panel-btn.comment-btn {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE0IDEzIj4KICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDB2OS4yM0g4LjgxNUwzLjM3IDEzVjkuMjNIMFYweiIvPgo8L3N2Zz4K);
    }

    .panel-btn.comment-btn:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMyIgdmlld0JveD0iMCAwIDE0IDEzIj4KICAgIDxwYXRoIGZpbGw9IiM4QTkzQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0IDB2OS4yM0g4LjgxNUwzLjM3IDEzVjkuMjNIMFYweiIvPgo8L3N2Zz4K);
    }

    .panel-btn.collect-btn {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij4KICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMzMyIDE0Ljk2OGMtLjQ2LS4yNTUtMS4yMDUtLjI1NS0xLjY2NiAwTDQuMzUgMTYuNzk0Yy0uOTIxLjUwNi0xLjUyMy4wNDQtMS4zNDktMS4wMjdsLjYzNS0zLjg2N2MuMDg4LS41MzctLjE0Mi0xLjI4LS41MTYtMS42NkwuNDM2IDcuNWMtLjc0NS0uNzYtLjUxMS0xLjUwNC41MTYtMS42NmwzLjcwNy0uNTY0Yy41MTQtLjA4IDEuMTE5LS41MzggMS4zNDgtMS4wMjdMNy42NjUuNzMxYy40NjItLjk3NiAxLjIwOC0uOTczIDEuNjY3IDBsMS42NiAzLjUxOWMuMjMuNDg5LjgzMy45NSAxLjM0OSAxLjAyN2wzLjcwOC41NjRjMS4wMjkuMTU2IDEuMjU4LjkwMi41MTUgMS42NmwtMi42ODUgMi43MzljLS4zNzIuMzgtLjYwMyAxLjEyMy0uNTE1IDEuNjZsLjYzNCAzLjg2N2MuMTc2IDEuMDc0LS40MyAxLjUzMy0xLjM0OCAxLjAyN2wtMy4zMTgtMS44MjZ6Ii8+Cjwvc3ZnPgo=);
    }

    .panel-btn.collect-btn:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij4KICAgIDxwYXRoIGZpbGw9IiM4QTkzQTAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuMzMyIDE0Ljk2OGMtLjQ2LS4yNTUtMS4yMDUtLjI1NS0xLjY2NiAwTDQuMzUgMTYuNzk0Yy0uOTIxLjUwNi0xLjUyMy4wNDQtMS4zNDktMS4wMjdsLjYzNS0zLjg2N2MuMDg4LS41MzctLjE0Mi0xLjI4LS41MTYtMS42NkwuNDM2IDcuNWMtLjc0NS0uNzYtLjUxMS0xLjUwNC41MTYtMS42NmwzLjcwNy0uNTY0Yy41MTQtLjA4IDEuMTE5LS41MzggMS4zNDgtMS4wMjdMNy42NjUuNzMxYy40NjItLjk3NiAxLjIwOC0uOTczIDEuNjY3IDBsMS42NiAzLjUxOWMuMjMuNDg5LjgzMy45NSAxLjM0OSAxLjAyN2wzLjcwOC41NjRjMS4wMjkuMTU2IDEuMjU4LjkwMi41MTUgMS42NmwtMi42ODUgMi43MzljLS4zNzIuMzgtLjYwMyAxLjEyMy0uNTE1IDEuNjZsLjYzNCAzLjg2N2MuMTc2IDEuMDc0LS40MyAxLjUzMy0xLjM0OCAxLjAyN2wtMy4zMTgtMS44MjZ6Ii8+Cjwvc3ZnPgo=);
    }

    .panel-btn.weibo-btn {
        background-image: url(//s3.pstatp.com/toutiao/xitu_juejin_web/img/weibo.2076a57.svg);
    }

    .panel-btn.weibo-btn:hover {
        background-image: url(//s3.pstatp.com/toutiao/xitu_juejin_web/img/weibo-hover.9abf502.svg);
    }

    .panel-btn.qq-btn {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE1IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiNCMkJBQzIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjQ2OCAxMC4zMTJjLS4wMS0uOTU3LS4zOC0xLjQ3Ni0uODA3LTIuMTUzLS4xOTEtLjI4My0uNDEzLS40NzMtLjYwNS0uNzU1LS4wMy0uMTU0LjAzMy0uMjY4LS4wMTItLjY3MS0uMDQyLS42MDQtLjI2My0uODM4LS4zMS0uOTEyLjAyLS4xNi0uMDQzLTEuNDg1LS41MjMtMi4yNjhDMTAuNzUxLjk0MSA3Ljk4Mi44NDYgNy42NDMuODQ0SDcuNjRjLS4zMzkuMDAyLTMuMTA3LjA5Ny00LjU2OCAyLjcxLS40NzkuNzgyLS41NDMgMi4xMDYtLjUyMyAyLjI2Ny0uMDQ2LjA3NC0uMjY3LjMwOC0uMzEuOTEyLS4wNDQuNDAzLjAxOC41MTctLjAxMi42Ny0uMTkyLjI4NC0uNDEzLjQ3My0uNjA1Ljc1Ni0uNDI2LjY3Ny0uNzk3IDEuMTk2LS44MDYgMi4xNTMtLjAwNy43MTQuMTYyIDEuNjg3LjY2MyAxLjcuMTU4LS4wMTIuMjkyLS4xMTcuNTY2LS40MjQuMDgyLS4wOTIuMzctLjQ4LjQyOS0uNTg3LjA1Ni4xNDguMTkgMS4xODMgMS4xMiAxLjcyMy0uOTU2LjQ1LTEuNDI0LjczNS0xLjQ0IDEuMzE5LjAyLjMzOC40MjMuNzg3IDEuMTY1Ljk5NmE2LjA1IDYuMDUgMCAwIDAgMi45MjcuMDVjLjUzNS0uMTMuNjk2LS4yNiAxLjM5Ni0uNjQ0LjcuMzg1Ljg2LjUxNCAxLjM5NS42NDNhNi4wNTIgNi4wNTIgMCAwIDAgMi45MjctLjA0OWMuNzQyLS4yMDkgMS4xNDYtLjY1OCAxLjE2Ni0uOTk2LS4wMTYtLjU4NC0uNDg0LS44Ny0xLjQ0LTEuMzIuOTMtLjUzOCAxLjA2My0xLjU3NCAxLjEyLTEuNzIyLjA1OC4xMDcuMzQ2LjQ5NS40MjguNTg3LjI3NC4zMDcuNDA5LjQxMi41NjcuNDI0LjUtLjAxMy42Ny0uOTg2LjY2My0xLjd6Ii8+Cjwvc3ZnPgo=);
    }

    .panel-btn.qq-btn:hover {
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE1IDE2Ij4KICAgIDxwYXRoIGZpbGw9IiM1NUIyRjEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE0LjQ2OCAxMC4zMTJjLS4wMS0uOTU3LS4zOC0xLjQ3Ni0uODA3LTIuMTUzLS4xOTEtLjI4My0uNDEzLS40NzMtLjYwNS0uNzU1LS4wMy0uMTU0LjAzMy0uMjY4LS4wMTItLjY3MS0uMDQyLS42MDQtLjI2My0uODM4LS4zMS0uOTEyLjAyLS4xNi0uMDQzLTEuNDg1LS41MjMtMi4yNjhDMTAuNzUxLjk0MSA3Ljk4Mi44NDYgNy42NDMuODQ0SDcuNjRjLS4zMzkuMDAyLTMuMTA3LjA5Ny00LjU2OCAyLjcxLS40NzkuNzgyLS41NDMgMi4xMDYtLjUyMyAyLjI2Ny0uMDQ2LjA3NC0uMjY3LjMwOC0uMzEuOTEyLS4wNDQuNDAzLjAxOC41MTctLjAxMi42Ny0uMTkyLjI4NC0uNDEzLjQ3My0uNjA1Ljc1Ni0uNDI2LjY3Ny0uNzk3IDEuMTk2LS44MDYgMi4xNTMtLjAwNy43MTQuMTYyIDEuNjg3LjY2MyAxLjcuMTU4LS4wMTIuMjkyLS4xMTcuNTY2LS40MjQuMDgyLS4wOTIuMzctLjQ4LjQyOS0uNTg3LjA1Ni4xNDguMTkgMS4xODMgMS4xMiAxLjcyMy0uOTU2LjQ1LTEuNDI0LjczNS0xLjQ0IDEuMzE5LjAyLjMzOC40MjMuNzg3IDEuMTY1Ljk5NmE2LjA1IDYuMDUgMCAwIDAgMi45MjcuMDVjLjUzNS0uMTMuNjk2LS4yNiAxLjM5Ni0uNjQ0LjcuMzg1Ljg2LjUxNCAxLjM5NS42NDNhNi4wNTIgNi4wNTIgMCAwIDAgMi45MjctLjA0OWMuNzQyLS4yMDkgMS4xNDYtLjY1OCAxLjE2Ni0uOTk2LS4wMTYtLjU4NC0uNDg0LS44Ny0xLjQ0LTEuMzIuOTMtLjUzOCAxLjA2My0xLjU3NCAxLjEyLTEuNzIyLjA1OC4xMDcuMzQ2LjQ5NS40MjguNTg3LjI3NC4zMDcuNDA5LjQxMi41NjcuNDI0LjUtLjAxMy42Ny0uOTg2LjY2My0xLjd6Ii8+Cjwvc3ZnPgo=);
    }

    .panel-btn.wechat-btn {
        background-image: url(//s3.pstatp.com/toutiao/xitu_juejin_web/img/wechat.63e1ce0.svg);
    }

    .panel-btn.wechat-btn:hover {
        background-image: url(//s3.pstatp.com/toutiao/xitu_juejin_web/img/wechat-hover.c8ce019.svg);
    }

    .panel-btn {
        position: relative;
        margin-bottom: .075rem;
        width: .3rem;
        height: .3rem;
        background-color: #fff;
        background-position: 50%;
        background-repeat: no-repeat;
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .04);
        cursor: pointer;
    }

    .panel-btn.with-badge:after {
        content: attr(badge);
        position: absolute;
        top: 0;
        left: 75%;
        padding: .01rem .04rem;
        font-size: .1rem;
        text-align: center;
        line-height: 1;
        white-space: nowrap;
        color: #fff;
        background-color: #b2bac2;
        border-radius: .07rem;
        transform-origin: left top;
        transform: scale(.75);
    }
}

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
