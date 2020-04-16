<template>
    <div id="app">
        <Top data_title="单页标题"/>
        <main>
            Blank
        </main>
        <Bottom />
    </div>
</template>

<script>
export default {
    name: "App",
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    filters: {},
    mounted: function() {
    },
    components: {
    }
};
</script>

<style lang="less">
@bg: #f6f8fa;
@space: 20px;
@ipad: 1024px;
@ipad-y: 767px;
html {
    background-color: @bg;
}
body {
    padding: 100px 10px @space 10px;
    max-width: 880px;
    margin: 0 auto;
    a {
        text-decoration: none;
    }
    font-family: -apple-system, "Microsoft YaHei", Trebuchet MS, Calibri,
        BlinkMacSystemFont, Segoe UI, Helvetica Neue, Helvetica, sans-serif;
    text-rendering: optimizelegibility;
}
@media screen and (max-width: @ipad) {
    body {
        max-width: 90%;
    }
}
@media screen and (max-width: @ipad-y) {
    body {
        padding-top: 40px;
    }
}
@media screen and (max-width: @ipad-y) {
    .m-top {
        margin-bottom: -40px;
    }
}
</style>
