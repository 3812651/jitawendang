<template>
<div class="document_body">
    <v-header></v-header>
    <div class="container">
        <div class="document_box">
            <Affix :offset-top="50">
                <div class="nav">
                    <ul>
                        <li v-for="(item,index) in nav_list" :key="item.name" :class="{isActive:checkIndex==index}" @click="nav_change(item,index)">
                            <Tooltip :content="item.name" placement="left">
                                <svg-icon :iconClass="checkIndex==index?item.activeIcon:item.defaultIcon" />
                            </Tooltip>
                        </li>
                    </ul>
                </div>
            </Affix>
            <div class="content">
                <transition mode="out-in">
                    <component :is="view"></component>
                </transition>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import basic from "./basic/basicMenu.vue";
import advance from "./advance.vue";
export default {
    components: {
        basic,
        advance,
    },
    data() {
        return {
            checkIndex: 0,
            view: "basic",
            nav_list: [{
                    name: "基础乐理",
                    defaultIcon: "basic_default",
                    activeIcon: "basic"
                },
                {
                    name: "进阶乐理",
                    defaultIcon: "advance_default",
                    activeIcon: "advance",
                },
            ],
        };
    },
    methods: {
        nav_change(item, index) {
            this.checkIndex = index;
            this.view = index == 0 ? basic : advance;
        },
    },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/publicVar.less";

.v-enter-active,
.v-leave-active {
    transition: all 0.4s;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    // transform: translateX(100px);
}

.container {
    @margin-auto();
}

.document_box {
    display: flex;

    // padding: 0.8rem 2.54rem 0;
    .nav {
        width: 0.5rem;

        li {
            display: flex;
            justify-content: center;
            margin: 0.19rem 0;
        }
    }

    .content {
        height: 100%;
        width: calc(100% - 0.5rem);
        padding: 0.07rem 0 0 0.3rem;
        // color: #b5b7bb;
    }
}
</style>
