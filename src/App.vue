<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            transitionName: "",
        };
    },
};
</script>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
