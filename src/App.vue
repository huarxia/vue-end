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
