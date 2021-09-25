<template>
  <div class="footer-wrap">
    <div class="footer-copyright">
      <p>
        Copyright © SuperTyler博客 ·
        本博客由 <a href="https://nuxtjs.org/" target="_blank" rel="nofollow">Nuxt.js</a> 强力驱动
      </p>
      <p><a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">苏ICP备19025406号-1</a></p>
      <aplayer v-if="isloadAPlayer" :audio="audio" :lrcType="3" :autoplay="false" fixed/>
    </div>
  </div>
</template>

<script>

export default {
  name: "footer-item.vue",
  data() {
    return {
      audio: {
        name: '循環バス',
        artist: '22/7',
        url: '/music/循環バス-22_7.mp3',
        cover: '/music/循環バス-22_7.jpg',
        lrc: '/music/循環バス-22_7.lrc',
      },
      isloadAPlayer: false
    }
  },
  mounted() {
    this.isloadAPlayer = true;
  }
}
</script>

<style scoped lang="scss">
.footer-wrap {
  margin-top: 0.4rem;
  height: 3rem;
  background-color: #FFFFFF;
  box-shadow: 0 0 40px rgb(17 58 93 / 10%);;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-copyright {
    max-width: 1140px;
    flex: 1;
    color: #90949c;
    text-align: center;
    font-size: 0.3rem;
    line-height: 0.7rem;

    @media screen and (max-width: 780px) {
      font-size: 0.5rem;
      line-height: 1rem;
    }

    a {
      text-decoration: none;
      color: tomato;
    }
  }
}
</style>
