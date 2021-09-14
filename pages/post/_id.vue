<template>
  <div class="post-wrap">
    <div class="top-cover-img">
      <div class="img" :style="{backgroundImage: 'url(' + post.post_frist_image+ ')'}"></div>
    </div>
    <article class="article">
      <div class="cover" :style="{backgroundImage: 'url(' + post.post_frist_image+ ')'}">
        <div class="title">{{ post.title.rendered }}</div>
      </div>
      <div class="content" v-html="post.content.rendered"></div>
    </article>

  </div>

</template>

<script>
import http from "@/http/http";
import prism from 'prismjs';
import "prismjs/themes/prism.css";

export default {
  head() {
    return {
      title: this.post.title.rendered
    }
  },
  data() {
    return {
      post: []
    }
  },
  async asyncData(context) {
    // 加载文章
    console.log(context.params.id)
    try {
      const post = await http.getPostDetail(context.params.id).then(data => data.data);
      // console.log(post.content.rendered)
      if (/^<p><img/.test(post.content.rendered)) {
        post.content.rendered = post.content.rendered.replace(/^<p><img.*\/>/, "<p>")
      }
      return {
        post
      }
    } catch (e) {
      console.log("文章不存在")
    }
  },
  validate({params}) {
    return /^\d+$/.test(params.id);
  },
  mounted() {
    // window.Prism = window.Prism || {};
    // window.Prism.manual = true;
    // import ('prismjs');
    // import ("prismjs/themes/prism.css");
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

  .article {
    width: 100%;
    max-width: 780px;
    background-color: #FFFFFF;
    border-radius: 4px;
    box-shadow: 0 0 2px rgb(98 124 153 / 10%);
    position: relative;
    margin-top: 1rem;
    overflow: hidden;

    @media screen and (max-width: 780px) {
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
      }
    }

    .content {
      padding: 0.4rem;


    }
  }
}

</style>

<style lang="scss">
.post-wrap .article .content {
  img {
    max-width: 100%;
  }
}
</style>
