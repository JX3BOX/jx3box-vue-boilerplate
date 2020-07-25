<template>
    <singlebox :post="post" :author="author" :stat="stat">
        <div class="u-meta u-sub-block" slot="single-header">
            <em class="u-label">首领</em>
            <span class="u-value">
                xx
            </span>
        </div>

        <!-- 其它meta -->
    </singlebox>
</template>

<script>
import singlebox from "@jx3box/jx3box-page/src/cms-single.vue";
// 助手函数
import _ from "lodash";
// 数据服务
import { getPost } from "../service/post.js";
import { getStat, postStat } from "../service/stat.js";

export default {
    name: "single",
    props: [],
    data: function() {
        return {
            loading: false,

            post: {},
            author: {},
            stat: {},
        };
    },
    computed: {
        id: function() {
            return this.$store.state.pid;
        },
    },
    methods: {},
    filters: {},
    created: function() {
        if (this.id) {
            this.loading = true;
            getPost(this.id, this)
                .then((res) => {
                    this.post = this.$store.state.post = res.data.data.post;
                    this.author = this.$store.state.author = res.data.data.author;
                    this.$store.state.status = true;
                })
                .finally(() => {
                    this.loading = false;
                });

            getStat(this.id).then((data) => {
                if (data) this.stat = this.$store.state.stat = data;
            });
            postStat(this.id);
        }
    },
    components: {
        singlebox,
    },
};
</script>

<style lang="less">
@import "../assets/css/single.less";
</style>
