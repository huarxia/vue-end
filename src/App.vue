<template>
    <div id="app">
        <app-wrapper></app-wrapper>
        <router-view></router-view>
    </div>
</template>

<script>
import appWrapper from '@/components/app-wrapper/';
export default {
    name: 'app',
    components: {
        appWrapper
    }
};
</script>

<style src="@/assets/style/_common.scss" rel="stylesheet/scss" lang="scss"></style>
<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
