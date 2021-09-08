<template>
  <div class="wrap">
    <div class="container">
      <section class="main">
        <index-swiper-item class="shadow"></index-swiper-item>
        <!-- 正文列表-->
        <div class="article-list shadow">

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
import http from "~/http/http.js";
import 'element-ui/lib/theme-chalk/display.css';
import indexSwiperItem from "~/components/index-swiper-item";

export default {
  components: {
    indexSwiperItem
  },
  // async asyncData() {
  //   try {
  //     const res = await http.getHomeConfig().then(data => data.data);
  //     let swipe_nav = res.expand.swipe_nav.map(item => {
  //       if (item.type === "apppage") {
  //         item.path = item.path.replace("pages/detail/detail?id=", "/post/")
  //       }
  //       return item;
  //     })
  //     console.log(swipe_nav)
  //
  //     return {
  //       swiper: swipe_nav
  //     }
  //   } catch (e) {
  //     console.log("网络错误！", e);
  //     return {}
  //   }
  // },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
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
    margin-top: 20px;

    .main {
      flex: 1;
      padding: 0 10px;

      .article-list {
        margin-top: 15px;
        background-color: #fff;
        height: 400px;
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
