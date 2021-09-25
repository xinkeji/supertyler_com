<template>
  <div class="post-wrap">
    <div class="top-cover-img">
      <div class="img"
           :style="{backgroundImage: 'linear-gradient(rgba(255,255,255,0), rgba(240,240,242,1) 70%, rgba(240,240,242,1)), url(' + post.post_frist_image+ ')'}"></div>
    </div>
    <div class="content-wrapper">
      <article class="article">

        <!--   顶部特色图   -->
        <div class="cover" :style="{backgroundImage: 'url(' + post.post_frist_image+ ')'}">
          <div class="mask"></div>
          <div class="title">{{ post.title.rendered }}</div>
        </div>

        <!--   文章meta信息   -->
        <div class="info">

          <div class="category item">
            <font-awesome-icon :icon="['fas', 'bars']"/>
            {{ post.category_name }}
          </div>

          <div class="date item">
            <font-awesome-icon :icon="['far', 'calendar-alt']"/>
            {{ post.formatDate }}
          </div>

          <div class="pageviews item">
            <font-awesome-icon :icon="['far', 'eye']"/>
            {{ post.pageviews }}
          </div>

          <div class="like item">
            <font-awesome-icon :icon="['far', 'thumbs-up']"/>
            {{ post.like_count }}
          </div>

          <div class="comment item">
            <font-awesome-icon :icon="['far', 'comments']"/>
            {{ post.total_comments }}
          </div>

        </div>

        <!--   文章正文   -->
        <div class="content" v-html="post.content.rendered"></div>

        <!--   文章标签  -->
        <div class="tags">
          <el-tag class="item" type="danger" v-for="(item, index) in tags" :key="index">{{ item.name }}</el-tag>
        </div>

      </article>

      <div class="relatives">

        <nuxt-link class="item previous" :to="`/post/${post.previous_post_id}`"
                   v-if="post.previous_post_id">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'chevron-left']"/>
          </div>
          <div class="desc">上一篇</div>
          <div class="title">{{ post.previous_post_title }}</div>
        </nuxt-link>


        <nuxt-link class="item next" :to="`/post/${post.next_post_id}`"
                   v-if="post.next_post_id">
          <div class="icon">
            <font-awesome-icon :icon="['fas', 'chevron-right']"/>
          </div>
          <div class="desc">下一篇</div>
          <div class="title"> {{ post.next_post_title }}</div>
        </nuxt-link>

      </div>

    </div>

  </div>

</template>

<script>
import http from "@/http/http";
import prism from 'prismjs';
import "prismjs/themes/prism.css";
import prismline from "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "~/assets/post.css";
import moment from "moment";

export default {
  head() {
    return {
      title: this.post.title.rendered
    }
  },
  data() {
    return {
      post: [],
      tags: []
    }
  },
  async asyncData(context) {

    try {
      // 获取文章内容
      const post = await http.getPostDetail(context.params.id).then(data => data.data);
      // console.log(post.content.rendered)
      if (/^<p><img/.test(post.content.rendered)) {
        post.content.rendered = post.content.rendered.replace(/^<p><img.*\/>/, "<p>");
      }
      post.formatDate = moment(post.date).utcOffset(8).format('YYYY-MM-DD')

      // 获取文章标签
      const tags = await http.getPostTag({post: context.params.id}).then(data => data.data);

      return {
        post,
        tags
      }
    } catch (e) {
      console.log("文章不存在");
    }
  },
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  mounted() {
    Prism.highlightAll();
  }
}
</script>

<style scoped lang="scss">
.post-wrap {
  display: flex;
  justify-content: center;

  .top-cover-img {
    width: 100%;
    height: 9rem;
    overflow: hidden;
    position: absolute;

    .img {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
      filter: blur(30px);
      transform: scale(1.1);
    }
  }

  .content-wrapper {
    width: 100%;
    max-width: 1140px;

    .article {
      background-color: #FFFFFF;
      border-radius: 4px;
      box-shadow: 0 0 2px rgb(98 124 153 / 10%);
      position: relative;
      margin-top: 1rem;
      overflow: hidden;

      @media screen and (max-width: 1140px) {
        margin-top: 0;
      }

      .cover {
        width: 100%;
        height: 6rem;
        background-position: center;
        background-size: cover;
        position: relative;

        .title {
          position: absolute;
          bottom: 0.4rem;
          left: 0.4rem;
          color: #FFFFFF;
          font-weight: bold;
          font-size: 32px;
          line-height: 36px;
          max-width: 80%;
          text-shadow: 0.1rem 0.1rem 0.2rem black;

          @media screen and (max-width: 780px) {
            font-size: 1rem;
            line-height: 1.2rem;
          }
        }

        .mask {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 5rem;
          width: 100%;
          background: linear-gradient(1turn, rgba(9, 15, 29, .4), transparent)
        }
      }


      .info {
        display: flex;
        padding: 0.4rem;
        border-bottom: 1px solid #f5f6f7;
        font-size: 14px;
        line-height: 0.6rem;
        height: 0.6rem;
        color: #8590a6;
        @media screen and (max-width: 780px) {
          font-size: 0.5rem;
          line-height: 1rem;
          height: 1rem;
        }

        .item {
          margin-right: 0.5rem;
        }

      }

      .tags {
        padding: 0.4rem;

        .item {
          margin-right: 0.2rem;
          cursor: pointer;
        }
      }
    }

    .relatives {
      margin-top: 0.4rem;
      overflow: hidden;
      display: flex;

      .item {
        flex: 1;
        background-color: #FFFFFF;
        border-radius: 4px;
        box-shadow: 0 0 2px rgb(98 124 153 / 10%);
        position: relative;
        height: 2.0rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0.4rem;
        text-decoration: none;
        box-sizing: border-box;

        @media screen and (max-width: 780px) {
          height: 3rem;
        }

        .desc {
          font-size: 15px;
          color: #aaaeb3;
          @media screen and (max-width: 780px) {
            font-size: 0.5rem
          }
        }

        .title {
          font-size: 18px;
          font-weight: 400;
          overflow: hidden;
          color: #000;

          @media screen and (max-width: 780px) {
            font-size: 0.5rem;
            line-height: 0.6rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

        }

        .icon {
          color: #CCC;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);

          @media screen and (max-width: 780px) {
            display: none;
          }
        }


        &.previous {
          padding-left: 50px;
          position: relative;
          @media screen and (max-width: 780px) {
            padding-left: 0.4rem;
          }

          .icon {
            left: 0.4rem;
          }

          & + .next {
            margin-left: 0.4rem;
          }
        }

        &.next {
          text-align: right;
          padding-right: 50px;
          position: relative;
          @media screen and (max-width: 780px) {
            padding-right: 0.4rem;
          }

          .icon {
            right: 0.4rem;
          }
        }
      }
    }
  }

}

</style>
