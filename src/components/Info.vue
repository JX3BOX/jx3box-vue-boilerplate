<template>
    <div class="m-info">
        <!-- TODO:修改链接地址 -->
        <a class="u-channel" href="/">
            <!-- img class="u-channel-logo" svg-inline src="../assets/img/cj.svg" / -->
            <span class="u-title">栏目</span>
        </a>
        <!-- 统计数据 -->
        <div class="u-stat">
        </div>
        <!-- 发布按钮 -->
        <el-button
            class="u-publish"
            type="primary"
            icon="el-icon-edit"
        >发布</el-button>
    </div>
</template>

<script>
export default {
    name: "Info",
    props: [],
    data: function() {
        return {};
    },
    computed: {},
    methods: {},
    mounted: function() {}
};
</script>

<style lang="less">
.c-breadcrumb {
    .u-stat {
    }
}
@media screen and (max-width:@ipad){
    .c-breadcrumb{
        .u-stat{
            white-space:nowrap;
            overflow:auto;
        }
    }
}
</style>
