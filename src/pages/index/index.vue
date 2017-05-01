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
            },
            noJson: {
                validate: false,
                text: '不是json格式，請修改!!!'
            }
        };
    },
    methods: {

        /**
         * save 保存json數據
         *
         */
        save: function () {
            var me = this;
            var json = this.$refs.codeMirror.getValue();
            var isJson;
            try {
                JSON.parse(json);
                isJson = true;
            } catch (error) {
                isJson = false;
            }
            if (!isJson) {
                me.noJson.validate = true;
                me.autoCloseAlert();
                return;
            }
            console.log(isJson);
        },

        /**
         * autoCloseAlert 一定時間后關閉提示框
         *
         */
        autoCloseAlert: function () {
            var me = this;
            setTimeout(function () {
                me.noJson.validate = false;
            }, 1854);
        }
    }
};
</script>

<style src="./index.scss" rel="stylesheet/scss" lang="scss" scoped></style>
