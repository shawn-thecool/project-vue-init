<template>
  <div id="app">
    app
    <!-- <inputFile id="fileUploadTester" accept=".png, .jpeg" label-text="test" :input-hndr="inputHndr"></inputFile> -->
    <input-file id="inputFileTest" :input-hndr="inputHndr"></input-file>
    <button-simple text="버튼" button-type="confirm" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="error" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="warning" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="default" :click-hndr="clickHndr"></button-simple>
  </div>
</template>

<script>
import InputFile from '@commons/inputFile/InputFile.vue'
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
    ButtonSimple
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
