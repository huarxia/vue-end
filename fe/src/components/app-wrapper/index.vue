<template src="./index.tpl.html"></template>

<script>
import config from './config';
export default {
    name: 'app-wrapper',
    data () {
        return {
            menu: config.menu
        };
    }
};
</script>

<style src="./index.scss" rel="stylesheet/scss" lang="scss" scoped></style>
