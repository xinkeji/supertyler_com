<template>
  <div class="wrap">
    <div class="container">
      <section class="main">
        <!-- 首页幻灯 -->
        <index-swiper-item class="shadow"></index-swiper-item>
        <!-- 正文列表 -->
        <div class="article-list shadow">
          <articleListItem :postList="postsList"></articleListItem>
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

let page = 1;

export default {
  components: {
    indexSwiperItem,
    articleListItem
  },
  async asyncData() {
    const queryObj = {
      per_page: 10,
      orderby: "date",
      order: "desc",
      page: page
    };
    let res = await http.getArticleList(queryObj).then(data => data.data);
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
      postsList: []
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
          background-image: url("~/static/avatar.jpg");
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
