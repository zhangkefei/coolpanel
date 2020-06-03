<template>
    <div class="page" style="padding: 20px;">
        <h1>Window</h1>
        <div class="block">
            <window-simple title="这是标题">
                <template v-slot>
                    <p>simple-这是一些文本</p>
                </template>
            </window-simple>
        </div>
        <div class="block">
            <window-normal title="THIS IS TITLE">
                <template v-slot>
                    <p>normal-这是一些文本</p>
                </template>
            </window-normal>
        </div>
        <div class="block">
            <window-shape1 title="标题">
                <template v-slot>
                    <p>shape1-这是一些文本</p>
                </template>
            </window-shape1>
        </div>
    </div>
</template>

<script>
import WindowSimple from "@/components/window/simple.vue";
import WindowNormal from "@/components/window/normal.vue";
import WindowShape1 from "@/components/window/shape1.vue";
export default {
    components: {
        WindowSimple,
        WindowNormal,
        WindowShape1
    }
};
</script>

<style lang="stylus" scoped>
.block {
    position: relative;
    min-height: 100px;
    width: 400px;
    margin-bottom: 20px;
}
</style>