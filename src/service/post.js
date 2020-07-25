import { $ } from "./axios";
import { __server } from "@jx3box/jx3box-common/js/jx3box.json";
const API_LIST = "post/list";
const API_SINGLE = "post/find";

function getPosts(params, vm) {
    let query = {
        type: "fb",
    };
    if (params) {
        query = Object.assign(query, params);
    }

    return $.get(API_LIST, {
        params: query,
    })
}
function getPost(pid, vm) {
    return $.get(API_SINGLE, {
        params: {
            id: pid,
        },
    })
}

export { getPosts, getPost };
