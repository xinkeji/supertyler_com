<template>
  <view>
    {{ $route.params.id }}
  </view>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id);
  }
}
</script>

<style scoped>

</style>
