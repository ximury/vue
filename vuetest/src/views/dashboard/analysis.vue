// 调用 store.js 的内容
<template>
    <div>
        {{count}}
    </div>
</template>
<script>
export default {
  computed: {
    count: function () {
      return this.$store.state.count
    }
  }
}
</script>
<style>

</style>
