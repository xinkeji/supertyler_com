<template>
  <div class="wrap">
    <div class="container">
      <section class="main">
        <!-- 首页幻灯 -->
        <index-swiper-item class="shadow"></index-swiper-item>
        <!-- 正文列表 -->
        <div class="article-list shadow">
          <articleListItem :postList="postsList"></articleListItem>
          <div class="loading-more" v-if="!isLastPage" @click="loadMorePosts">
            <span v-if="!isPostLoading">加载更多</span>
            <i v-else class="el-icon-loading"></i>
          </div>
        </div>
      </section>

      <section class="aside hidden-sm-and-down">
        <div class="personal-info-wrap">
          <div class="personal-avatar shadow"></div>
          <div class="personal-dec shadow">
            <div class="name">SuperTyler</div>
            <div class="intro">Tyler同学的个人博客</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
import indexSwiperItem from "~/components/index-swiper-item";
import articleListItem from "~/components/article-list-item";

import http from "~/http/http";
import moment from "moment";

let page = 2;

export default {
  head() {
    return {
      script: [{
        innerHTML:
          `(function () {
            var redirect = sessionStorage.redirect;
            delete sessionStorage.redirect;
            if (redirect && redirect !== location.href) {
              history.replaceState(null, null, redirect);
            }
          })();
          `
      }
      ],
      __dangerouslyDisableSanitizers: ['script']
    }
  },
  components: {
    indexSwiperItem,
    articleListItem
  },
  async asyncData() {
    const queryObj = {
      per_page: 10,
      orderby: "date",
      order: "desc",
      page: 1
    };
    let res = await http.getArticleList(queryObj).then(data => data.data);
    if (!Array.isArray(res)) {
      return;
    }
    res = res.map(item => {
      item.formatDate = moment(item.date).utcOffset(8).format('YYYY-MM-DD')
      return item;
    })
    return {
      postsList: res
    }
  },
  data() {
    return {
      postsList: [],
      isLastPage: false,
      isPostLoading: false
    }
  },
  methods: {
    async loadMorePosts() {
      const queryObj = {
        per_page: 10,
        orderby: "date",
        order: "desc",
        page: page
      };
      try {
        this.isPostLoading = true;
        let res = await http.getArticleList(queryObj).then(data => data.data);
        this.isPostLoading = false;
        if (Array.isArray(res)) {
          res = res.map(item => {
            item.formatDate = moment(item.date).utcOffset(8).format('YYYY-MM-DD')
            return item;
          })
          if (res.length < 10) {
            this.isLastPage = true;
            console.log("最后一页了");
          }
          this.postsList = this.postsList.concat(res);
          page++;
        } else if (res.code === "rest_post_invalid_page_number") {
          this.isLastPage = true;
          console.log("最后一页了");
        }
      } catch (e) {
        this.isPostLoading = false;
        console.log(e)
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;

  .container {
    max-width: 1140px;
    width: 100%;
    display: flex;
    margin-top: 0.5rem;

    .main {
      flex: 1;
      width: 1px;
      padding: 0 10px;

      .article-list {
        margin-top: 15px;
        background-color: #fff;
      }

      .loading-more {
        text-align: center;
        line-height: 40px;
        height: 40px;
        font-size: 14px;
        color: tomato;
        cursor: pointer;

        @media screen and (max-width: 540px) {
          font-size: 0.5rem;
          line-height: 1.5rem;
          height: 1.5rem;
        }

      }
    }

    .aside {
      width: 300px;
      margin: 0 10px;

      .personal-info-wrap {
        position: relative;

        .personal-avatar {
          position: absolute;
          top: -70px;
          left: 50%;
          margin-left: -70px;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background-image: url("~/static/images/avatar.jpg");
          background-size: cover;
        }

        .personal-dec {
          margin-top: 70px;
          background-color: #FFFFFF;
          height: 400px;
          width: 100%;
          padding-top: 90px;
          //display: flex;
          //flex-direction: column;

          .name {
            text-align: center;
            width: 100%;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
  }
}

</style>
