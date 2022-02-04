<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb name="测试" slug="test" root="/test" :publishEnable="true" :adminEnable="true" :feedbackEnable="true" :crumbEnable="true">
            <img slot="logo" svg-inline :src="getAppIcon('macro')" />
        </Breadcrumb>
        <LeftSidebar>left side</LeftSidebar>
        <Main :withoutRight="false">
            <img src="@/assets/img/logo.svg" alt="">
            <div class="m-main">
                <router-view />
            </div>
            <RightSidebar>right side</RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import { getAppIcon } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: { getAppIcon },
    components: {},
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>
