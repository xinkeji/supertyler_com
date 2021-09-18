import API from "./api";
import axios from "axios";
import querystring from "querystring";

// 获取顶部菜单配置
function getTopMenu() {
  return axios.get(API.TOP_MENU_URL);
}

// 获取博客配置
function getHomeConfig() {
  return axios.get(API.HOME_CONFIG_URL);
}

// 获取文章列表
function getArticleList(queryObj) {
  return axios.get(API.ARTICLE_LIST_URL + "?" + querystring.stringify(queryObj));
}

// 读取文章详情
function getPostDetail(postId) {
  return axios.get(API.POST_DETAIL_URL + "/" + postId);
}

function getPostTag(queryObj) {
  return axios.get(API.POST_TAG_URL + "?" + querystring.stringify(queryObj))
}

export default {
  getTopMenu,
  getHomeConfig,
  getArticleList,
  getPostDetail,
  getPostTag
}
