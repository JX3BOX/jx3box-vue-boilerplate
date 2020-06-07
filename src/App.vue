<template>
    <div id="app">
        <Header></Header>
        <Breadcrumb
            name="频道名称"
            slug="slug"
            root="/slug"
            :publishEnable="true"
            :adminEnable="true"
            :feedbackEnable="true"
        >
            <img slot="logo" svg-inline src="./assets/img/logo.svg" />
            <Info />
        </Breadcrumb>
        <LeftSidebar>
            <Nav />
        </LeftSidebar>
        <Main :withoutRight="false">
            <router-view />
            <!-- <RightSidebar>
                <Extend />
            </RightSidebar> -->
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Info from "@/components/Info.vue";
import Nav from "@/components/Nav.vue";
// import Extend from "@/components/Extend.vue";

export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {
        let params = new URLSearchParams(location.search);
        this.$store.state.subtype = getRewrite("subtype");
        this.$store.state.pid = params.get("pid") || getRewrite("pid");
        this.$store.state.mode = this.$store.state.pid ? "single" : "list";
    },
    components: {
        Info,
        Nav,
        // Extend,
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
@import "./assets/css/side.less";
</style>