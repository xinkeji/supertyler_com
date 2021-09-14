<template>
  <div>
    <top-menu-item></top-menu-item>
    <nuxt keep-alive/>
    <footer-item></footer-item>
  </div>
</template>

<style>
body {
  background: #F0F0F2;
}
</style>
<script>
import TopMenuItem from "~/components/top-menu-item";
import FooterItem from "~/components/footer-item";

export default {
  components: {
    TopMenuItem,
    FooterItem
  }
}
</script>
