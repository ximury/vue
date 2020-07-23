/* eslint-disable vue/valid-v-for */
// 如果格式有问题,很容易报错
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->

      <input type="text" v-model="name" name="" id="">
      <input type="button" value="新增" v-on:click="add()">
      <!-- require-v-for-key Elements in iteration expect to have 'v-bind:key' directives.-->
      <ul>
          <!-- <li v-for="n in nameList">
              {{n}}
          </li> -->

<!-- 如果不加 key，提示以下错误： -->
<!-- Custom elements in iteration require 'v-bind:key' directives.eslint(vue/valid-v-for) -->
<!-- 如果加key，但是key值随意填写，提示以下错误： -->
<!-- Expected 'v-bind:key' directive to use the variables which are defined by the 'v-for' directive.eslint(vue/valid-v-for) -->

          <todoitem v-for="n in nameList" :key="n">
            <!-- 往卡槽里塞值 -->
            <template v-slot:first="itemProps">
              <!-- <span style="color:red"> -->
              <span :style="{color:itemProps.ckft_value?'red':'blue'}">
                {{n}}---{{itemProps}}
              </span>
            </template>
          </todoitem>
      </ul>
      <!-- edit是自己起的 -->
      <event :info="info" @change="edit">

      </event>
  </div>
</template>

<script>
import todoitem from './components/TodoItem.vue'
import event from './components/Event'

export default {
  name: 'App',
  components: {
    todoitem,
    event
  },

  data: function () {
    return {
      name: '',
      nameList: [],

      info: ''
    }
  },
  methods: {
    add: function () {
      this.nameList.push(this.name)
      this.name = ''
    // 或者
    // vm.nameList.push(vm.name)
    // vm.name=""
    },
    edit: function (val) {
      this.info = val
    }
  }
}

</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
