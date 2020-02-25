<template>
  <div id="app">
    <h1>app</h1>
    <input-simple type="text" id="inp-spl-text-test" label="..." :input-hndr="inputHndr"></input-simple>
    <input-simple type="number" id="inp-spl-number-test" label="..." :input-hndr="inputHndr"></input-simple>

    <button-simple text="버튼" button-type="confirm" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="error" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="warning" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="default" :click-hndr="clickHndr"></button-simple>
    <modal-simple></modal-simple>
  </div>
</template>

<script>
import InputSimple from '@commons/inputs/InputSimple.vue'

import ButtonSimple from '@commons/button/ButtonSimple.vue'
import ModalSimple from '@commons/modals/ModalSimple.vue'
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
  components: {
    ButtonSimple,
    InputSimple,
    ModalSimple
  }
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
