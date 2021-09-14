<template>
  <div>
    <div class="post-item" v-for="(item, index) in postList" :key="index">
      <div class="left-img">
        <nuxt-link :to="'/post/' + item.id">
          <div class="cover" :style="{backgroundImage: 'url('+ item.post_thumbnail_image+')' }"></div>
        </nuxt-link>
      </div>
      <div class="right-desc">
        <div class="title">
          <h3>
            <nuxt-link :to="'/post/' + item.id">
              {{ item.title.rendered }}
            </nuxt-link>
          </h3>
        </div>
        <div class="excerpt" v-html="item.excerpt.rendered"></div>

        <div class="categories">
          <div class="tag">{{ item.category_name }}</div>
        </div>

        <div class="info">
          <div class="date item">
            <font-awesome-icon :icon="['far', 'calendar-alt']"/>
            {{ item.formatDate }}
          </div>

          <div class="pageviews item">
            <font-awesome-icon :icon="['far', 'eye']"/>
            {{ item.pageviews }}
          </div>

          <div class="like item">
            <font-awesome-icon :icon="['far', 'thumbs-up']"/>
            {{ item.like_count }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "article-list-item",
  props: {
    postList: Array
  }
}
</script>

<style scoped lang="scss">
.post-item {
  display: flex;
  padding: 0.4rem;
  border-bottom: 1px solid #F5F6F7;

  .left-img {
    width: 5rem;
    height: 2.8125rem;
    background-color: #ccc;
    flex-shrink: 0;

    .cover {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
    }
  }

  .right-desc {
    flex: 1;
    margin-left: 0.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      font-size: 20px;
      line-height: 25px;
      font-weight: bold;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      a {
        color: black !important;
        text-decoration: none !important;
      }

      @media screen and (max-width: 992px) {
        font-size: 16px;
        line-height: 18px;
      }

      @media screen and (max-width: 424px) {
        font-size: 14px;
        line-height: 16px;
      }
    }

    .excerpt {
      font-size: 12px;
      color: #797C80;
      line-height: 20px;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;

      @media screen and (max-width: 720px) {
        -webkit-line-clamp: 1;
      }

      @media screen and (max-width: 540px) {
        display: none;
      }


      p {
        display: inline-block;
      }

      &:after {
        content: "";
        display: inline-block;
      }
    }

    .categories {
      color: rgb(96, 125, 139);
      font-size: 14px;

      .tag {
        padding: 0.1rem 0.15rem;
        font-size: 12px;
        border-radius: 4px;
        border: 1px solid #B3D8FF;
        color: #409eff;
        box-sizing: border-box;
        white-space: nowrap;
        display: inline-block;
      }
    }

    .info {
      display: flex;
      font-size: 12px;
      color: #BCBCBC;

      .item {
        margin-right: 0.2rem;
      }
    }
  }

}
</style>
