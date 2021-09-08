<template>
  <div>
    <top-menu-item></top-menu-item>
    <nuxt/>
  </div>
</template>

<style>
  body{
    background: #F0F0F2;
  }
</style>
<script>
import TopMenuItem from "~/components/top-menu-item";

export default {
  components: {TopMenuItem}
}
</script>
