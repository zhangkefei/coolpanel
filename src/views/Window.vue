<template>
    <div class="cp-page" style="padding: 20px;">
        <h1>Window</h1>
        <div class="wrap">
            <div class="block">
                <cp-window-simple title="这是标题">
                    <template v-slot>
                        <p>simple-这是一些文本</p>
                    </template>
                </cp-window-simple>
            </div>
            <div class="block">
                <cp-window-normal title="THIS IS TITLE">
                    <template v-slot>
                        <p>normal-这是一些文本</p>
                    </template>
                </cp-window-normal>
            </div>
            <div class="block">
                <cp-window-shape1 title="这是标题">
                    <template v-slot>
                        <p>shape1-这是一些文本</p>
                    </template>
                </cp-window-shape1>
            </div>
            <div class="block">
                <cp-window-shape2 title="这是标题" edge="6">
                    <template v-slot>
                        <p>shape2-这是一些文本</p>
                    </template>
                </cp-window-shape2>
            </div>
            <div class="block">
                <cp-window-shape3 title="这是标题" edge="6">
                    <template v-slot>
                        <p>shape3-这是一些文本</p>
                    </template>
                </cp-window-shape3>
            </div>
            <div class="block">
                <cp-window-shape4 title="这是标题">
                    <template v-slot>
                        <p>shape4-这是一些文本</p>
                    </template>
                </cp-window-shape4>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.block {
    position: relative;
    min-height: 100px;
    width: 23%;
    margin-bottom: 20px;
}
</style>