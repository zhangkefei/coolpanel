<template>
    <div class="cp-window shape2">
        <div
            class="main"
            :style="{
                width: `calc(100% - ${edge * 2}px)`,
                height: `calc(100% - ${edge * 2}px)`,
                padding: `${edge * 2}px`
            }"
        >
            <div class="top" :style="{height: `${edge}px`, top: `${edge * -1}px`}"></div>
            <div class="bottom" :style="{height: `${edge}px`, bottom: `${edge * -1}px`}"></div>
            <div class="right" :style="{width: `${edge}px`, right: `${edge * -1}px`}"></div>
            <div class="left" :style="{width: `${edge}px`, left: `${edge * -1}px`}"></div>
            <div class="cp-title">{{title}}</div>
            <div class="cp-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        },
        edge: {
            type: Number,
            default: 4
        }
    }
};
</script>

<style lang="stylus" scoped>
.shape2 {
    min-height: 150px;

    .main {
        box-sizing: border-box;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--bg-color);

        .top {
            width: 100%;
            position: absolute;
            left: 0;
            background-color: var(--bg-color);
            transform: skewX(-45deg);
            transform-origin: left bottom;
        }

        .bottom {
            width: 100%;
            position: absolute;
            left: 0;
            background-color: var(--bg-color);
            transform: skewX(-45deg);
            transform-origin: left top;
        }

        .right {
            height: 100%;
            position: absolute;
            top: 0;
            background-color: var(--bg-color);
            transform: skewY(-45deg);
            transform-origin: left bottom;
        }

        .left {
            height: 100%;
            position: absolute;
            top: 0;
            background-color: var(--bg-color);
            transform: skewY(-45deg);
            transform-origin: right bottom;
        }
    }
}
</style>