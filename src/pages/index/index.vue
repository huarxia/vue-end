<template src="./index.tpl.html"></template>

<script>
import codeMirror from '@/components/code-mirror/';
export default {
    name: 'index',
    components: {
        codeMirror
    },
    data () {
        return {
            codeVlaue: {
                'a': 1
            }
        };
    }
};
</script>

<style src="./index.scss" rel="stylesheet/scss" lang="scss" scoped></style>
