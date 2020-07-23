// 传给父值进行更改数据
<template>
    <li>
        {{info||'--'}}
        <input type="text" name="info" @change="editInfo"/>
    </li>
</template>
<script>
export default {
  props: {
    info: String
  },
  methods: {
    editInfo: function (e) {
      this.$emit('change', e.target.value)
    }
  }
}
</script>
<style>

</style>
