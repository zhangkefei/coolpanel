<template>
    <div class="window normal">
        <div class="title" v-if="title">{{title}}</div>
        <div class="content" :style="{paddingTop: title ? 'var(--padding)' : 0}">
            <slot></slot>
        </div>
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
.normal {
    box-sizing: border-box;
    background-color: rgba(128, 128, 255, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: var(--padding);
}
</style>