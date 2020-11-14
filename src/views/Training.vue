<template>
<div class="training_box_body">
    <v-header></v-header>
    <div class="training_box">
        <div class="left"></div>
        <div class="center"></div>
        <div class="right"></div>
        <div class="card_box">
            <ul id="first_ul" v-show="checkIndex == 0">
                <li v-for="item in firstList" :key="item.iconClass" :id="item.id">
                    <svg-icon :iconClass="item.iconClass" class="svg_default" />
                    <div class="li_cxt">
                        <p>
                            「节奏型」: <span> {{ item.rhythmType }} </span>
                        </p>
                        <div class="handShape">
                            <p>「手型」:</p>
                            <svg-icon :iconClass="item.shoushi" class="svg_default" />
                        </div>
                        <div class="sketch">
                            <p>「速写」:</p>
                            <svg-icon :iconClass="item.sketch" class="svg_default" />
                        </div>
                    </div>
                    <i class="play_btn" v-show="btn_flag" @click="btn_flag = !btn_flag"></i>
                    <i class="pause_btn" v-show="!btn_flag" @click="btn_flag = !btn_flag"></i>
                </li>
            </ul>
            <ul id="second_ul" v-show="checkIndex == 1">
                <li v-for="item in secondList" :key="item.iconClass" :id="item.id">
                    <svg-icon :iconClass="item.iconClass" class="svg_default" v-if="item.id==10||item.id==18" style="width:3.7rem!important;height:3.3rem!important" />
                    <svg-icon :iconClass="item.iconClass" class="svg_default" v-if="item.id>10&item.id<18" />
                    <div class="li_cxt" v-if="item.id>10&item.id<18">
                        <p>
                            「节奏型」:<span>{{ item.rhythmType }}</span>
                        </p>
                        <div class="handShape">
                            <p>「手型」:</p>
                            <svg-icon :iconClass="item.shoushi" class="svg_default" />
                        </div>
                        <div class="sketch">
                            <p>「速写」:</p>
                            <svg-icon :iconClass="item.sketch" class="svg_default" />
                        </div>
                    </div>
                    <!-- <svg-icon iconClass="shoushi_qianxiao" class="svg_default" /> -->
                    <i class="play_btn" v-show="btn_flag" @click="btn_flag = !btn_flag"></i>
                    <i class="pause_btn" v-show="!btn_flag" @click="btn_flag = !btn_flag"></i>
                </li>
            </ul>
        </div>
    </div>
    <div class="change_tooltip">
        <div v-for="(item, index) in tooltip_list" :key="item.name" @click="tooltip_click(item, index)">
            <div class="dashed_box" :class="{ isActive: checkIndex == index }">
                <Icon type="md-basketball" />
            </div>
            <p>{{ item.name }}</p>
        </div>
    </div>
</div>
</template>

<script>
import $ from "jquery";
import {
    debounce
} from "../js/debounce.js";
export default {
    data() {
        return {
            checkIndex: 0,
            li_index: 4,
            btn_flag: true,
            tooltip_list: [{
                name: "单拍子"
            }, {
                name: "复拍子"
            }],
            firstList: [{
                    id: 1,
                    iconClass: "tempo_28",
                    rhythmType: "二八",
                    shoushi: "shoushi_28",
                    sketch: 'shoushi_4'
                },
                {
                    id: 2,
                    iconClass: "tempo_816",
                    rhythmType: "八十六",
                    shoushi: "shoushi_816",
                    sketch: 'sketch_816'
                },
                {
                    id: 3,
                    iconClass: "tempo_168",
                    rhythmType: "十六八",
                    shoushi: "shoushi_168",
                    sketch: 'sketch_168'
                },
                {
                    id: 4,
                    iconClass: "tempo_416",
                    rhythmType: "四个十六",
                    shoushi: "shoushi_416",
                    sketch: 'sketch_416'
                },
                {
                    id: 5,
                    iconClass: "tempo_qianxiao",
                    rhythmType: "前小",
                    shoushi: "shoushi_qianxiao",
                    sketch: 'sketch_qianxiao'
                },
                {
                    id: 6,
                    iconClass: "tempo_houxiao",
                    rhythmType: "后小",
                    shoushi: "shoushi_houxiao",
                    sketch: 'sketch_houxiao'
                },
                {
                    id: 7,
                    iconClass: "tempo_xiaoqiefen",
                    rhythmType: "小切分",
                    shoushi: "shoushi_xiaoqiefen",
                    sketch: 'sketch_xiaoqiefen'
                },
                {
                    id: 8,
                    iconClass: "tempo_4",
                    rhythmType: "四",
                    shoushi: "shoushi_4",
                    sketch: 'sketch_4'
                },
                {
                    id: 9,
                    iconClass: "tempo_sanlianyin",
                    rhythmType: "三连音",
                    shoushi: "shoushi_sanlianyin",
                    sketch: 'sketch_sanlianyin'
                },
            ],
            secondList: [{
                    id: 10,
                    iconClass: "sapiens",
                },
                {
                    id: 11,
                    iconClass: "tempo_fuba",
                    rhythmType: "附八",
                    shoushi: "shoushi_fuba",
                    sketch: "sketch_fuba",
                },
                {
                    id: 12,
                    iconClass: "tempo_bafu",
                    rhythmType: "八附",
                    shoushi: "shoushi_bafu",
                    sketch: "sketch_bafu",
                },
                {
                    id: 13,
                    iconClass: "tempo_baqieba",
                    rhythmType: "八切八",
                    shoushi: "shoushi_8-8",
                    sketch: "sketch_8-8",
                },
                {
                    id: 14,
                    iconClass: "tempo_baqieshiliu",
                    rhythmType: "八切十六",
                    shoushi: "shoushi_8-16",
                    sketch: "sketch_8-16",
                },
                {
                    id: 15,
                    iconClass: "tempo_16-8",
                    rhythmType: "十六切八",
                    shoushi: "shoushi_16-8",
                    sketch: "sketch_16-8",
                },
                {
                    id: 16,
                    iconClass: "tempo_16-16",
                    rhythmType: "十六切十六",
                    shoushi: "shoushi_16-16",
                    sketch: "sketch_16-16",
                },
                {
                    id: 17,
                    iconClass: "tempo_2",
                    rhythmType: "二",
                    shoushi: "shoushi_2",
                    sketch: "sketch_2",
                },
                {
                    id: 18,
                    iconClass: "sapiens2",
                },
            ],
        };
    },
    methods: {
        tooltip_click(item, index) {
            this.checkIndex = index;
            $(`#first_ul`).css({
                transform: `translateX(0)`,
                transition: "all .5s ease",
            });
            $(`#second_ul`).css({
                transform: `translateX(0)`,
                transition: "all .5s ease",
            });
            //一进来默认id为14或者5的li居中
            //根据checkIndex改变历史居中id
            if (index == 1) {
                this.removeClass(14);
                this.addClass(14);
                this.$store.commit({
                    type: "changeId",
                    id: 14,
                });
            } else if (index == 0) {
                this.removeClass(5);
                this.addClass(5);
                this.$store.commit({
                    type: "changeId",
                    id: 5,
                });
            }
        },
        removeClass(current_id) {
            //每进入另外一个ul，则先把上一个ul的样式清空
            current_id = current_id == undefined ? 14 : current_id;
            let history_id = this.$store.state.history_id; //上一个拥有居中放大class的li的id
            //如果选中的li不是上一个居中的li，则把立即把上一个居中的li及它左右的li的样式消除,以及把li里面的svg恢复成默认样式
            if (current_id != history_id) {
                this.$store.commit({
                    type: "changeId",
                    id: current_id,
                });
                let history_li = $(`#${history_id}`);
                history_li.removeClass("li_active_center");
                history_li.prev().removeClass("li_active_left");
                history_li.next().removeClass("li_active_right");

                history_li.children("svg").removeClass("svg_active");
                history_li.prev().children("svg").removeClass("svg_active_left_right");
                history_li.next().children("svg").removeClass("svg_active_left_right");
            }
            //如果是最左或者最右一个li，去除li_active_left或者li_active_right他们的样式
            if (current_id == 1) {
                $(`#${current_id}`).removeClass("li_active_left");
                $(`#${current_id}`)
                    .children("svg")
                    .removeClass("svg_active_left_right");
            }
            if (current_id == 18) {
                $(`#${current_id}`).removeClass("li_active_right");
                $(`#${current_id}`)
                    .children("svg")
                    .removeClass("svg_active_left_right");
            }
        },
        addClass(id) {
            $(`#${id}`).addClass("li_active_center");
            $(`#${id}`).children("svg").addClass("svg_active");

            $(`#${id}`).prev().addClass("li_active_left");
            $(`#${id}`).prev().children("svg").addClass("svg_active_left_right");

            $(`#${id}`).next().addClass("li_active_right");
            $(`#${id}`).next().children("svg").addClass("svg_active_left_right");
        },
    },
    created() {},
    mounted() {
        //默认给第一个ul的第五个li加上居中样式
        this.addClass(5);
        window.removeClass = this.removeClass;
        window.addClass = this.addClass;
        $(function () {
            // TODO：ul的位置动态变化的的距离
            function translate(left_overflow_px, ul_name) {
                $(`#${ul_name}`).css({
                    transform: `translateX(${left_overflow_px}rem)`,
                    transition: "all .5s ease",
                });
            }
            // TODO：li点击事件函数
            function li_click() {
                let current_id = parseInt($(this).attr("id"));
                window.removeClass(current_id);
                setTimeout(() => {
                    //为了保持选中的li居中，让ul的位置动态的变化
                    if (current_id < 5) {
                        //选中的li的id是前四个，则li整体往右移动
                        let left_overflow_px = [(5 - current_id) * 182] / 100;
                        translate(left_overflow_px, "first_ul");
                    } else if (current_id > 4 && current_id < 10) {
                        // 选中的li是第五个及右边，则ul整体往左移动
                        let left_overflow_px = -[(current_id - 5) * 182] / 100;
                        translate(left_overflow_px, "first_ul");
                    } else if (current_id > 9 && current_id < 14) {
                        //选择的是第10到14个li
                        let left_overflow_px = [(14 - current_id) * 182] / 100;
                        translate(left_overflow_px, "second_ul");
                    } else {
                        //选择的是第14到18个li
                        let left_overflow_px = -[(current_id - 14) * 182] / 100;
                        translate(left_overflow_px, "second_ul");
                    }
                }, 400);
                // 给选中li及左右li，还有里面的svg加上class
                setTimeout(() => {
                    window.addClass(current_id);
                }, 900);
            }
            $(".card_box>ul>li").on("click", debounce(li_click));
        });
    },
};
</script>

<style lang="less" scoped>
.flex {
    display: flex;
    justify-content: center;
    align-items: center;
}

.svg_default {
    width: 1.7rem !important;
    height: 1.1rem !important;
    transition: all 0.4s ease;
}

.svg_active {
    width: 2.15rem !important;
    height: 1.85rem !important;
    margin-bottom: -0.5rem;
}

.svg_active_left_right {
    width: 1.6rem !important;
    height: 1.25rem !important;
}

.li_active_center {
    height: 4.4rem !important;
    width: 2.15rem !important;
    z-index: 5;
    margin-left: -22px !important;
    margin-right: -22px !important;
    animation: select_dropdown 0.9s linear;
}

@keyframes select_dropdown {
    0% {
        transform: scale(1, 0.9);
    }

    25% {
        transform: scale(1, 1.07);
    }

    50% {
        transform: scale(1, 0.95);
    }

    75% {
        transform: scale(1, 1.05);
    }

    100% {
        transform: scale(1, 1);
    }
}

.li_active_left {
    z-index: 4;
    margin-left: -70px !important;
    height: 3.7rem !important;
    width: 1.75rem !important;
}

.li_active_right {
    z-index: 4;
    height: 3.7rem !important;
    width: 1.75rem !important;
    margin-right: -70px !important;
}

.change_tooltip {
    z-index: 999;
    position: absolute;
    top: 0.8rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    width: 1.7rem;
    height: 0.8rem;
    padding: 0.1rem 0.2rem;
    background-color: #fff;
    color: #b7b8bf;
    border-radius: 0.5rem;
    text-align: center;
    font-family: "微软雅黑";
    font-size: 0.12rem;

    &>div {
        cursor: pointer;
    }

    .dashed_box {
        width: 0.5rem;
        height: 0.5rem;
        border: 2px dashed #dddde4;
        border-radius: 50%;
        .flex;
    }
}

.isActive {
    position: relative;
    animation: dashed-box 0.5s linear;
    border: 5px solid #ff2300 !important;

    &~p {
        color: #464c5b;
    }
}

@keyframes dashed-box {
    0% {
        transform: scale(0.7);
        transform-origin: center;
    }

    50% {
        transform: scale(1.1);
        transform-origin: center;
    }

    75% {
        transform: scale(0.8);
        transform-origin: center;
    }

    100% {
        transform: scale(1);
        transform-origin: center;
    }
}

.isActive:before,
.isActive:after {
    position: absolute;
    background: #dbdcdd;
    width: 0.5rem;
    height: 0.5rem;
    border: 2px solid #d3d4d9;
    content: "";
    display: block;
    border-radius: 50%;
    opacity: 0;
}

.isActive:after {
    border: 5px solid #d3d4d9;
}

.isActive:before {
    animation: wave-animate 1s ease-in-out;
}

.isActive:after {
    animation: wave-animate 1s 0.2s ease-in-out;
}

@keyframes wave-animate {
    0% {
        transform: scale(0);
        opacity: 0.7;
        transform-origin: center;
    }

    100% {
        transform: scale(2.5);
        opacity: 0;
        transform-origin: center;
    }
}

/*做li的动效和暂停、播放按钮的切换*/
.card_box {
    li {
        transition: all 0.4s ease;

        .pause_btn {
            width: 50px;
            height: 50px;
            opacity: 0;
            transition: opacity 0.75s;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -25px 0 0 -25px;
            background: url(../assets/training/pause.png) right center no-repeat;
            background-size: 50px auto;
            border-radius: 50%;
        }

        .play_btn {
            width: 50px;
            height: 50px;
            opacity: 0;
            transition: opacity 0.75s;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -25px 0 0 -25px;
            background: url(../assets/training/play.png) right center no-repeat;
            background-size: 50px auto;
            border-radius: 50%;
        }
    }

    .li_active_center:hover .pause_btn {
        opacity: 1;
        transition: opacity 0.75s;
    }

    .li_active_center:hover .play_btn {
        opacity: 1;
        transition: opacity 0.75s;
    }

    // li:hover {
    //   transform: scale(1.1, 1.1);
    // }
}

/*做li的动效和暂停、播放按钮的切换----end*/
.training_box_body {
    .flex;
    flex-direction: column;
    height: 100%;

    .card_box {
        height: 4.4rem;
        width: 100%;
        position: absolute;
        // left: -0.7rem;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 3;
        display: flex;
        justify-content: center;

        ul {
            display: flex;
            align-items: center;
            // position: absolute;
            height: 4.4rem;
        }

        li {
            position: relative;
            width: 1.7rem;
            height: 3.3rem;
            background-color: #fff;
            margin: 0 6px;
            border-radius: 13px;
            box-shadow: 0px 2px 7px #c9ccd5;

            svg {
                pointer-events: none;
            }
        }
    }

    .training_box {
        position: relative;
        width: 100%;
        height: calc(100vh - 0.9rem);
        overflow: hidden;

        // background-color: #e6e9f0;
        .center {
            z-index: 1;
            height: 100%;
            width: 3.2rem;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            // box-shadow: 0px 2px 45px #c9ccd5;
            // background-color: #e6e9f0;
        }

        .left {
            position: absolute;
            left: 50%;
            transform: translateX(-100%);
            height: 100%;
            width: 3.2rem;
            // box-shadow: 0px 2px 45px #c9ccd5;
            // background-color: #e6e9f0;
        }

        .right {
            position: absolute;
            left: 50%;
            height: 100%;
            width: 3.2rem;
            // box-shadow: 0px 2px 45px #c9ccd5;
            // background-color: #e6e9f0;
        }
    }
}

/*li下面的节奏型及速写，手势*/
.card_box>ul>li {
    display: flex;
    flex-direction: column;
    align-items: center;

    .li_cxt {
        width: 1.3rem;

        .sketch,
        .handShape {
            display: flex;
            align-items: center;
        }

        .sketch {
            margin-top: -.3rem;
        }

        p {
            // margin: .1rem 0;
            color: #657180;
            font-size: 0.14rem;
            white-space: nowrap;

            span {
                margin-left: 0.1rem;
            }
        }

        img {
            vertical-align: middle;
        }
    }
}

/*li下面的节奏型及速写，手势----end*/
</style>
