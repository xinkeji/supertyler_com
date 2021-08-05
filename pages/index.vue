<template>
<div class="wrap">
  <div v-for="(item, index) in arr" :key="index">
    {{item}}
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      arr: "hello, world!".split("")
    }
  }
}
</script>

<style>
.wrap{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 50px;
  align-items: center;
  height: 100vh;
}

.wrap div{
  width:100px;
}
</style>
