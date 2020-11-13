<template>
<div class="main-header-box">
    <header class="main-header main-header visible">
        <div class="header">
            <div class="logo">
                <span>Logo</span>
            </div>
            <ul>
                <li v-for="(item,index) in nav_list" :key="item.name" :class="{isActive:checkIndex==index}" @click="nav_change(item,index)">{{item.name}}</li>
            </ul>
            <router-link to="/Layout">
                <Button type="primary" shape="circle" style="border:1px solid #fff">登录</Button>
            </router-link>
        </div>
    </header>
</div>
</template>

<script>
export default {
    data() {
        return {
            checkIndex: window.localStorage.getItem("checkIndex") == null ? 0 : window.localStorage.getItem("checkIndex"),
            nav_list: [{
                    name: "社区",
                    url: "/Community"
                },
                {
                    name: "训练",
                    url: "/Training"
                },
                {
                    name: "文档",
                    url: "/Document"
                },
                {
                    name: "我的"
                },
            ],
        };
    },
    methods: {
        nav_change(item, index) {
            // this.$store.commit({
            //   type: "changeIndex",
            //   checkIndex: index,
            // });
            window.localStorage.setItem("checkIndex", index);
            this.$router.push({
                path: item.url
            });
        },
    },
};
</script>

<style lang="less" scoped>
@import "../assets/css/publicVar.less";

@flex: {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main-header-box {
    position: relative;
    height: .6rem;
    margin-bottom: .3rem;
}

.main-header.visible {
    transform: translateZ(0);
}

.main-header {
    height: .6rem;
}

.main-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: all .2s;
    transform: translate3d(0, -100%, 0);
}

.isActive {
    color: #fff !important;
}

.header {
    @margin-auto();
    @flex();
    height: 100%;
    color: white;
    // padding: 0 2.54rem;
    z-index: 9999;

    .logo {
        width: 0.5rem;
        height: 0.5rem;
        background-color: deepskyblue;
        text-align: center;
        line-height: 0.5rem;
        border: 1px solid #fff;
        border-radius: 50%;

        span {
            font-size: 0.14rem;
        }
    }

    ul {
        flex-shrink: 2;
        display: flex;

        li {
            position: relative;
            width: 1.4rem;
            height: 100%;
            line-height: 0.6rem;
            font-size: 0.16rem;
            color: #b5b7bb;
            // background-color: deepskyblue;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }

        li:hover {
            color: #fff;
        }

        li::before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0.4rem;
            bottom: 10px;
            width: 0.6rem;
            height: 2px;
            background: #fff;
            transform: scaleX(0);
            transition: transform 0.5s;
        }

        li:hover:before {
            color: #fff;
            transform: scaleX(1);
        }
    }
}
</style>
