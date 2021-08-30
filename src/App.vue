<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="配装器"
            slug="j3pz"
            root="/j3pz"
            :publishEnable="false"
            :adminEnable="false"
            :feedbackEnable="true"
            :crumbEnable="true"
        >
            <img slot="logo" svg-inline src="./assets/img/logo.svg" />
        </Breadcrumb>
        <LeftSidebar>left side</LeftSidebar>
        <Main :withoutRight="false">
            <div class="m-main">
                <router-view />
            </div>
            <RightSidebar>right side</RightSidebar>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
export default {
    name: "App",
    props: [],
    data: function () {
        return {};
    },
    computed: {},
    methods: {},
    components: {},
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>
