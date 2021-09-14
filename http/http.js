import API from "./api";
import axios from "axios";
import querystring from "querystring";

function getTopMenu() {
  return axios.get(API.TOP_MENU_URL);
}

function getHomeConfig() {
  return axios.get(API.HOME_CONFIG_URL);
}

function getArticleList(queryObj) {
  return axios.get(API.ARTICLE_LIST_URL + "?" + querystring.stringify(queryObj));
}

export default {
  getTopMenu,
  getHomeConfig,
  getArticleList
}
