<template>
    <div class="m-single-box m-fb-single" v-if="!loading" :loading="loading">
        <header class="m-single-header">
            <div class="m-single-title">
                <!-- 标题 -->
                <a class="u-title u-sub-block" :href="url">{{
                    post.post_title
                }}</a>
            </div>

            <div class="m-single-info">
                <!-- 用户名 -->
                <div class="u-author u-sub-block">
                    <i class="u-icon-author2"
                        ><img svg-inline src="../assets/img/author.svg"
                    /></i>
                    <a class="u-name" :href="authorLink">{{ author.name }}</a>
                </div>

                <div class="u-meta u-sub-block">
                    <em class="u-label">首领</em>
                    <span class="u-value u-boss-list">
                        {{ format(meta, "fb_boss") }}
                    </span>
                </div>

                <div class="u-meta u-sub-block">
                    <em class="u-label">模式</em>
                    <span class="u-value u-mode-list c-jx3fb-mode">
                        {{ format(meta, "fb_level") }}
                    </span>
                </div>

                <!-- 发布日期 -->
                <span class="u-podate u-sub-block" title="发布日期">
                    <i class="u-icon-podate"
                        ><img svg-inline src="../assets/img/podate.svg"
                    /></i>
                    <time>{{ post.post_date | dateFormat }}</time>
                </span>

                <!-- 最后更新时间 -->
                <span class="u-modate u-sub-block" title="最后更新">
                    <i class="u-icon-modate"
                        ><img svg-inline src="../assets/img/modate.svg"
                    /></i>
                    <time>{{ post.post_modified | dateFormat }}</time>
                </span>

                <!-- 编辑 -->
                <a class="u-edit u-sub-block" :href="editLink" v-if="showEdit">
                    <i class="u-icon-edit el-icon-edit-outline"></i>
                    <span>编辑</span>
                </a>
            </div>

            <div class="m-single-panel">
                <!-- 收藏 -->
                <Fav />
                <el-button
                    size="mini"
                    type="primary"
                    disabled
                    title="即将推出.."
                    ><i class="el-icon-bell"></i><span>订阅</span></el-button
                >
            </div>
        </header>

        <div class="m-single-prepend">
            <div class="m-single-excerpt" v-if="post.post_excerpt">
                <el-divider content-position="left">Excerpt</el-divider>
                {{ post.post_excerpt }}
                <!-- <Mark class="u-mark" value="作者摘要"/> -->
            </div>
        </div>

        <div class="m-single-post">
            <el-divider content-position="left">JX3BOX</el-divider>
            <div class="m-single-content">
                <Article
                    :content="post.post_content"
                    directorybox="#directory"
                />
            </div>
        </div>

        <div class="m-single-append"></div>

        <div class="m-single-comment">
            <el-divider content-position="left">评论</el-divider>
            <Comment :post-id="id" />
        </div>

        <footer class="m-single-footer">
            <!-- <ins
                class="adsbygoogle"
                style="display:block;max-width:100%;overflow:hidden;margin:10px;"
                data-ad-client="ca-pub-4388499329141185"
                data-ad-slot="1787190081"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins> -->
        </footer>
    </div>
</template>

<script>
import lodash from "lodash";
import { getPost } from "../service/getPost";
import dateFormat from "../utils/dateFormat";
import { __Links } from "@jx3box/jx3box-common/js/jx3box.json";
import { authorLink, editLink } from "@jx3box/jx3box-common/js/utils.js";
import User from "@jx3box/jx3box-common/js/user.js";
export default {
    name: "single",
    props: [],
    data: function() {
        return {
            post: {},
            setting: {},
            meta: {},
            author: {},
            loading: true,
            url: location.href,
        };
    },
    computed: {
        authorLink: function() {
            return authorLink(this.author.uid);
        },
        editLink: function() {
            return editLink(this.post.post_type, this.post.ID);
        },
        id: function() {
            return this.$store.state.pid;
        },
        showEdit: function() {
            return (
                this.post.post_author == User.getInfo().uid ||
                User.getInfo().group > 60
            );
        },
    },
    methods: {
        format: function(parent, key) {
            let val = lodash.get(parent, key);
            if (Array.isArray(val)) {
                return val.toString();
            } else {
                return val;
            }
        },
    },
    filters: {
        dateFormat: function(val) {
            return dateFormat(new Date(val));
        },
    },
    mounted: function() {
        if (this.$store.state.pid) {
            this.loading = true;
            getPost(this.$store.state.pid)
                .then((res) => {
                    this.post = this.$store.state.post = res.data.data.post;
                    this.meta = this.$store.state.meta =
                        res.data.data.post.post_meta;
                    this.setting = this.$store.state.setting =
                        res.data.data.post;
                    this.author = this.$store.state.author =
                        res.data.data.author;
                    this.$store.state.status = true;
                })
                .catch((err) => {
                    console.log(err);
                })
                .finnaly(() => {
                    this.loading = false;
                });
        }
    },
};
</script>

<style lang="less">
@import "../assets/css/single.less";
</style>
