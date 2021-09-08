import API from "./api";
import axios from "axios";

function getTopMenu() {
  return axios.get(API.TOP_MENU_URL);
}

function getHomeConfig() {
  return axios.get(API.HOME_CONFIG_URL);
}

export default {
  getTopMenu,
  getHomeConfig
}
