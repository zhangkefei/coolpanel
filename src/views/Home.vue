<template>
    <div class="cp-page home">
        <router-link to="/panel">panel</router-link>
        <router-link to="/window">window</router-link>
    </div>
</template>

<script>
export default {
    name: "Home",
    components: {}
};
</script>

<style lang="stylus" scoped>
.home {
    a {
        font-size: 24px;
        text-decoration: none;
        color: #ddd;
        display: block;
    }
}
</style>
