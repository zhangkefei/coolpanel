<template>
    <div class="window simple">
        <div class="corner top-left"></div>
        <div class="corner top-right"></div>
        <div class="title" v-if="title">{{title}}</div>
        <div class="content" :style="{paddingTop: title ? 'var(--padding)' : 0}">
            <slot></slot>
        </div>
        <div class="corner bottom-left"></div>
        <div class="corner bottom-right"></div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ""
        }
    }
};
</script>

<style lang="stylus" scoped>
.simple {
    --corner-size: 8px;
    --corner-border: 1px solid var(--decoration-color);
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    background-color: var(--bg-color);
    color: var(--content-color);
    font-size: var(--content-size);

    .corner {
        position: absolute;
        height: var(--corner-size);
        width: var(--corner-size);
    }

    .top-left {
        top: 0;
        left: 0;
        border-top: var(--corner-border);
        border-left: var(--corner-border);
    }

    .top-right {
        top: 0;
        right: 0;
        border-top: var(--corner-border);
        border-right: var(--corner-border);
    }

    .bottom-right {
        bottom: 0;
        right: 0;
        border-bottom: var(--corner-border);
        border-right: var(--corner-border);
    }

    .bottom-left {
        bottom: 0;
        left: 0;
        border-bottom: var(--corner-border);
        border-left: var(--corner-border);
    }
}
</style>