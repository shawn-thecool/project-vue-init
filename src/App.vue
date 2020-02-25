<template>
  <div id="app">
<<<<<<< HEAD
    <h1>app</h1>
    <input-file id="inputFileTest" accept=".png, .jpeg" label-text="input file" :input-hndr="inputHndr"></input-file>
    <input-number id="inputNumberTest" label-text="input number" :input-hndr="inputHndr"></input-number>
    <input-text id="inputTextTest" label-text="input text" :input-hndr="inputHndr"></input-text>

    <input-simple type="text" id="inp-spl-text-test" label="..." :input-hndr="inputHndr"></input-simple>
    <input-simple type="number" id="inp-spl-number-test" label="..." :input-hndr="inputHndr"></input-simple>
    <input-simple type="file" id="inp-spl-file-test" label="..." :input-hndr="inputHndr"></input-simple>

=======
    app
    <!-- <inputFile id="fileUploadTester" accept=".png, .jpeg" label-text="test" :input-hndr="inputHndr"></inputFile> -->
    <div class="wrap_file">
      <input-file id="inputFileTest" labelText="파일 업로드" :input-hndr="inputHndr"></input-file>
    </div>
>>>>>>> f19533ebd8d3b2fe7e65059bec4120c17778e3d3
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
