<template>
  <div id="app">
    <h1>app</h1>
    <input-file id="inputFileTest" accept=".png, .jpeg" label-text="input file" :input-hndr="inputHndr"></input-file>
    <input-number id="inputNumberTest" label-text="input number" :input-hndr="inputHndr"></input-number>
    <input-text id="inputTextTest" label-text="input text" :input-hndr="inputHndr"></input-text>

    <input-simple type="text" id="inp-spl-text-test" label="..." :input-hndr="inputHndr"></input-simple>
    <input-simple type="number" id="inp-spl-number-test" label="..." :input-hndr="inputHndr"></input-simple>
    <input-simple type="file" id="inp-spl-file-test" label="..." :input-hndr="inputHndr"></input-simple>

    <button-simple text="버튼" button-type="confirm" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="error" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="warning" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="default" :click-hndr="clickHndr"></button-simple>
  </div>
</template>

<script>
import InputFile from '@commons/inputs/InputFile.vue'
import InputNumber from '@commons/inputs/InputNumber.vue'
import InputText from '@commons/inputs/InputText.vue'

import InputSimple from '@commons/inputs/InputSimple.vue'

import ButtonSimple from '@commons/button/ButtonSimple.vue'
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
    InputFile,
    ButtonSimple,
    InputNumber,
    InputText,
    InputSimple
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
</style>
