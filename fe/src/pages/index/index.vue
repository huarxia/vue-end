<template src="./index.tpl.html"></template>

<script>
import codeMirror from '@/components/code-mirror/';
import $ from 'jquery';
export default {
    name: 'index',
    components: {
        codeMirror
    },
    data () {
        return {
            codeVlaue: {},
            noJson: {
                validate: false,
                text: '不是json格式，請修改!!!'
            }
        };
    },
    mounted: function () {
        this.getIndeMeta();
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
            this.submitData();
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
        },

        /**
         * submitData 提交json數據
         *
         */
        submitData: function () {
            var json = JSON.parse(this.$refs.codeMirror.getValue());
            $.ajax({
                url: '/api/saveJson',
                type: 'POST',
                dataType: 'json',
                data: json
            })
            .done(function (res) {
                console.log('success');
            })
            .fail(function () {
                // console.log('error');
            })
            .always(function () {
                // console.log('complete');
            });
        },

        /**
         * getIndeMeta 獲取首頁配置
         *
         */
        getIndeMeta: function () {
            var me = this;
            $.ajax({
                url: '/api/indexMeta',
                type: 'GET',
                dataType: 'json',
                data: {}
            })
            .done(function (res) {
                me.codeVlaue = res.data;
            })
            .fail(function () {
                console.log('error');
            })
            .always(function () {});
        }
    }
};
</script>

<style src="./index.scss" rel="stylesheet/scss" lang="scss" scoped></style>
