<template>
  <div v-swiper="swiperOption" class="i-swiper-box">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in swiper" :key="index" class="swiper-slide">
        <nuxt-link :to="item.path">
          <div class="cover" :style="{ 'backgroundImage': 'url(' +item.image +')'}"></div>
          <div class="mask"></div>
          <h2 class="title">{{ item.title }}</h2>
        </nuxt-link>
      </div>
    </div>
    <div class="skeleton img-skeleton"></div>
    <div slot="pagination" class="swiper-pagination"></div>
  </div>
</template>

<script>
import http from "@/http/http";

export default {
  async fetch() {
    try {
      const res = await http.getHomeConfig().then(data => data.data);
      this.swiper = res.expand.swipe_nav.map(item => {
        if (item.type === "apppage") {
          item.path = item.path.replace("pages/detail/detail?id=", "/post/")
        }
        return item;
      });
    } catch (e) {
      console.log("网络错误！", e);
    }
  },
  data() {
    return {
      swiper: [],
      swiperOption: {
        lazy: {
          loadPrevNext: true
        },
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.i-swiper-box {
  position: relative;
  overflow: hidden;
  height: 6rem;
}

.cover {
  width: 100%;
  height: 6rem;
  background-size: 100% auto;
  background-position: center;
}

.title {
  position: absolute;
  bottom: 0.3rem;
  left: 0.3rem;
  color: white;
  font-size: 0.4rem;
  text-shadow: 0.1rem 0.1rem 0.2rem black;
}

.mask {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background: linear-gradient(1turn, rgba(9, 15, 29, .4), transparent)
}

.img-skeleton {
  width: 100%;
  height: 6rem;
  position: absolute;
  top: 0;
  left: 0;
}

.swiper-pagination {
  position: absolute;
  left: auto;
  right: 20px;
  top: 15px;
  width: auto;
  transform: none;

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #F54D32;
    transition: all 0.2s ease 0s;
  }

  .swiper-pagination-bullet-active {
    width: 18px;
    border-radius: 40px;
  }
}

</style>
