<template>
  <div id="app">
    app
    <!-- <inputFile id="fileUploadTester" accept=".png, .jpeg" label-text="test" :input-hndr="inputHndr"></inputFile> -->
    <input-file id="inputFileTest" :input-hndr="inputHndr"></input-file>
    <Button>버튼</Button>
  </div>
</template>

<script>
import InputFile from '@commons/inputFile/InputFile.vue'
import Button from '@commons/button/Button.vue'
export default {
  name: 'App',
  methods: {
    inputHndr() {
      console.log('dd')
    }
  },
  components: {
    InputFile,
    Button
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
