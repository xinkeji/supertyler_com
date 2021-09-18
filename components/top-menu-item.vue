<template>
  <div>
    <div class="header-wrap-placeholder"></div>
    <el-header class="header-wrap">
      <nav class="nav-wrap">

        <!-- logo -->
        <nuxt-link to="/">
          <h1 class="logo">SuperTyler的博客</h1>
        </nuxt-link>

        <!-- 导航菜单 -->
        <el-menu class="menus" mode="horizontal" default-active="1">
          <el-submenu v-for="(parent, index) in menus" :key="index" :index="parent.object_id">
            <template slot="title">{{ parent.title }}</template>
            <el-menu-item v-for="(child, index) in parent.child_items" :key="index" :index="child.object_id">
              {{ child.title }}
            </el-menu-item>
          </el-submenu>
        </el-menu>

        <!-- 搜索框-->
        <div class="search">
          <input class="search-input" :style="{width: inputWidth, opacity:inputOpacity}" @blur="inputBlur"></input>
          <i class="el-icon-search search-icon" @mouseenter="inputExpand"></i>
        </div>

      </nav>
    </el-header>
    <div class="mobile-header-wrap-placeholder"></div>
    <div class="mobile-header-wrap ">
      <nuxt-link to="/">
        <h1 class="logo">SuperTyler的博客</h1>
      </nuxt-link>
    </div>
  </div>

</template>

<script>
import http from "~/http/http.js"

export default {
  name: "top-menu-item",
  async fetch() {
    const res = await http.getTopMenu().then(data => data.data);
    this.menus = res.items;
  },
  data() {
    return {
      menus: [],
      inputWidth: "0",
      inputOpacity: 0
    }
  },
  mounted() {
  },
  methods: {
    inputExpand() {
      this.inputWidth = "180px";
      this.inputOpacity = 1;
    },
    inputBlur() {
      this.inputWidth = "0";
      this.inputOpacity = 0;
    }
  }
}
</script>

<style scoped lang="scss">
.header-wrap-placeholder {
  height: 60px;
  @media screen and (max-width: 780px) {
    display: none;
  }
}

.header-wrap {
  width: 100%;
  box-shadow: 0 5px 40px 0 rgb(17 58 93 / 10%);
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  @media screen and (max-width: 780px) {
    display: none;
  }

  .nav-wrap {
    max-width: 1140px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;

    .logo {
      background-image: url("~/static/images/logo-banner.png");
      background-size: 100% 100%;
      width: 180px;
      height: 30px;
      cursor: pointer;
      text-indent: -999em;
    }

    .menus {
      border-bottom: none;
      margin-left: 50px;
      display: flex;
    }

    .search {
      position: absolute;
      right: 15px;
      display: flex;
      align-items: center;
      cursor: pointer;

      .search-input {
        -webkit-appearance: none;
        background-color: #FFF;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        transition: all 0.6s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
        outline: 0;

        &:focus {
          border-color: #F54D32;
        }
      }

      .search-icon {
        padding-left: 5px;
        font-size: 22px;
      }
    }
  }
}

.mobile-header-wrap-placeholder {
  height: 1.5rem;
  @media screen and (min-width: 780px) {
    display: none;
  }
}

.mobile-header-wrap {
  height: 1.5rem;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 99;
  box-shadow: 0 5px 40px 0 rgb(17 58 93 / 10%);

  @media screen and (min-width: 780px) {
    display: none;
  }

  .logo {
    background-image: url("~/static/images/logo-banner.png");
    background-size: 100% 100%;
    width: 6.0rem;
    height: 1.0rem;
    cursor: pointer;
    text-indent: -999em;
  }

}
</style>
