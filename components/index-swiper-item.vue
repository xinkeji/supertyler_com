<template>
  <slider animation="normal" :height="height" ref="sliderDom" style="max-height: 250px">
    <slider-item
      v-for="(item, index) in swiper" :key="index"
    >
      <nuxt-link :to="item.path">
        <img class="cover" :src="item.image" :alt="item.title"/>
        <div class="mask"></div>
        <h2 class="title">{{ item.title }}</h2>
      </nuxt-link>
    </slider-item>
  </slider>
</template>

<script>
import {Slider, SliderItem} from 'vue-easy-slider'
import http from "@/http/http";

export default {
  components: {
    Slider,
    SliderItem,
  },
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
      height: "200px"
    }
  },
  methods: {},
  mounted() {
    let resizeHeight = () => {
      const width = parseInt(window.getComputedStyle(this.$refs.sliderDom.$el).width);
      this.height = width * 9 / 20 + "px";
    }
    resizeHeight();
    window.addEventListener("resize", resizeHeight);
  }
}
</script>
<style lang="scss">

.wrap .container .main .slider-indicators {
  position: absolute;
  left: auto;
  right: 20px;
  top: 15px;
  transform: none;

  .slider-indicator-icon {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #F54D32;
    transition: all 0.2s ease 0s;
  }

  .slider-indicator-active {
    width: 18px;
    border-radius: 40px;
  }
}
</style>
<style lang="scss" scoped>
.cover {
  width: 100%;
}

.title {
  position: absolute;
  bottom: 0.6rem;
  left: 0.8rem;
  color: white;
  font-size: 22px;
  text-shadow: 0.1rem 0.1rem 0.2rem black;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 17px;
  }
}

.mask {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background: linear-gradient(1turn, rgba(9, 15, 29, .4), transparent)
}
</style>
