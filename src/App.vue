<template>
  <div id="app">
    <h1>app</h1>
    <!-- <input-simple type="text" id="inp-spl-text-test" label="..." :input-hndr="inputHndr"></input-simple>
    <input-simple type="number" id="inp-spl-number-test" label="..." :input-hndr="inputHndr"></input-simple>

    <button-simple text="버튼" button-type="confirm" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="error" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="warning" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="default" :click-hndr="clickHndr"></button-simple>

    <alert-simple>
      <template v-slot:header>header</template>
      <template v-slot:body>body</template>
      <template v-slot:footer>footer</template>
    </alert-simple> -->

    <router-view></router-view>

    <popup-list></popup-list>

  </div>
</template>

<script>
import PopupList from '@commons/modals/popup/PopupList.vue'

export default {
  name: 'App',
  methods: {
    inputHndr() {
      console.log('input')
    },
    clickHndr() {
      console.log('click')
    }
  },
  mounted(){
    console.log(this.$route);
  },
  components: {
    PopupList
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*
  hover focus 예시
 */
#app .wrap_file .lab_file{
  height: 200px;
  line-height: 200px;
  background-color: pink;
}
#app .wrap_file .inp_file:focus + .lab_file ,#app .wrap_file .lab_file:hover{
  background-color: lightgoldenrodyellow
}
</style>
