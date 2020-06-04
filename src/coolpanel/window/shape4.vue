<template>
    <div class="cp-window shape4">
        <div
            class="main"
            :style="{
                height: `calc(100% - ${edge * 2}px)`,
                padding: `${edge * 0.5}px ${edge * 1.5}px`
            }"
        >
            <div class="top" :style="{borderWidth: `${edge}px`, top: `${edge * -2}px`}"></div>
            <div class="bottom" :style="{borderWidth: `${edge}px`, bottom: `${edge * -2}px`}"></div>
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
            default: 12
        }
    }
};
</script>

<style lang="stylus" scoped>
.shape4 {
    min-height: 150px;

    .main {
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--bg-color);

        .top {
            box-sizing: border-box;
            width: 100%;
            position: absolute;
            left: 0;
            border-color: transparent transparent var(--bg-color) transparent;
            border-style: solid;
        }

        .bottom {
            box-sizing: border-box;
            width: 100%;
            position: absolute;
            left: 0;
            border-color: var(--bg-color) transparent transparent transparent;
            border-style: solid;
        }
    }
}
</style>