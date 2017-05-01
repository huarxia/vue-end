<template src="./index.tpl.html"></template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';
require('script-loader!jsonlint');
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/json-lint';
export default {
    name: 'code-mirror',
    props: ['value'],
    data () {
        return {
            jsonEditor: false
        };
    },
    watch: {
        value: {
            handler: function (val, oldVal) {}
        }
    },
    mounted () {
        this.jsonEditor = CodeMirror.fromTextArea(this.$refs.textarea, {
            lineNumbers: true,
            mode: 'application/json',
            gutters: ['CodeMirror-lint-markers'],
            theme: 'monokai',
            lint: true,
            tabSize: 4, // tab寬度
            indentUnit: 4, // 4個縮進單位
            indentWithTabs: true,
            smartIndent: true, // 自动缩进
            lineWrapping: true // 自动换行 false --> 滚动
        });
        this.jsonEditor.setValue(JSON.stringify(this.value, null, 4));
        this.jsonEditor.on('change', cm => {
            this.$emit('changed', cm.getValue());
            this.$emit('input', cm.getValue());
        });
    },
    methods: {
        getValue () {
            return this.jsonEditor.getValue();
        }
    }
};
</script>

<style src="./index.scss" rel="stylesheet/scss" lang="scss" scoped></style>
