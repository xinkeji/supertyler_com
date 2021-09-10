<template>
  <div class="footer-wrap">
    <div class="footer-copyright">
      Copyright © SuperTyler博客 ·
      <a href="https://beian.miit.gov.cn/">苏ICP备19025406号-1</a> ·
      本博客由 <a href="https://nuxtjs.org/">Nuxt.js</a> 强力驱动
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-item.vue"
}
</script>

<style scoped lang="scss">
.footer-wrap {
  margin-top: 0.7rem;
  height: 2rem;
  background-color: #FFFFFF;
  box-shadow: 0 0 40px rgb(17 58 93 / 10%);;
  display: flex;
  justify-content: center;
  align-items: center;

  .footer-copyright {
    max-width: 1140px;
    flex: 1;
    font-size: 0.3rem;
    color: #90949c;
    text-align: center;

    a {
      text-decoration: none;
      color: tomato;
    }
  }
}
</style>
