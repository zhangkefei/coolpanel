<template>
    <div class="window wrap" :style="{'--edge': edge + 'px'}">
        <div class="left"></div>
        <div class="main">
            <div class="edge top-left"></div>
            <div class="edge top-right"></div>
            <div class="title" v-if="title">{{title}}</div>
            <div class="content" :style="{paddingTop: title ? 'var(--padding)' : 0}">
                <slot></slot>
            </div>
            <div class="edge bottom-left"></div>
            <div class="edge bottom-right"></div>
        </div>
        <div class="right"></div>
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
            default: 8
        }
    }
};
</script>

<style lang="stylus" scoped>
.wrap {
    box-sizing: border-box;
    min-height: 200px;
    display: flex;

    .main {
        position: relative;
        box-sizing: border-box;
        padding: var(--padding);
        background-color: var(--bg-color);
        flex-grow: 1;

        .edge {
            position: absolute;
            box-sizing: border-box;
            width: 0;
            height: 30%;
            min-height: calc(var(--edge) * 4);
            border-width: var(--edge);
            border-style: solid;
        }

        .top-left {
            top: 0;
            left: calc(var(--edge) * -2);
            border-color: transparent var(--bg-color) transparent transparent;
        }

        .top-right {
            top: 0;
            right: calc(var(--edge) * -2);
            border-color: transparent transparent transparent var(--bg-color);
        }

        .bottom-left {
            bottom: 0;
            left: calc(var(--edge) * -2);
            border-color: transparent var(--bg-color) transparent transparent;
        }

        .bottom-right {
            bottom: 0;
            right: calc(var(--edge) * -2);
            border-color: transparent transparent transparent var(--bg-color);
        }
    }

    .left {
        width: var(--edge);
    }

    .right {
        width: var(--edge);
    }
}
</style>