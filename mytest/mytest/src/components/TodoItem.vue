<template>
    <li>
        <!-- {{info}} -->

        <h4>哈哈哈</h4>
        <!-- 留一个插槽 -->
        <slot name="first" v-bind={ckft_value}></slot>
        <slot name="second"></slot>
        <input type="checkbox" name="ckft" v-model="ckft_value">
    </li>
</template>
<script>
export default {
  name: 'todoapp',
  // props: {
  //   info: String
  // }
  data: function () {
    return {ckft_value: false}
  }
}
</script>

<style>

</style>
