<template>
  <div id="app">
    <h1>app</h1>
    <input-simple
      type="text"
      id="inp-spl-text-test"
      label="..."
      :input-hndr="inputHndr"
    ></input-simple>
    <input-simple
      type="number"
      id="inp-spl-number-test"
      label="..."
      :input-hndr="inputHndr"
    ></input-simple>

    <button-simple text="버튼" button-type="confirm" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="error" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="warning" :click-hndr="clickHndr"></button-simple>
    <button-simple text="버튼" button-type="default" :click-hndr="clickHndr"></button-simple>

    <drop-down-simple>
      <template v-slot:DropDownItemList>
        <li v-for="(item, index) in testList" :key="index" class="item_drop">{{ index }}</li>
      </template>
    </drop-down-simple>
    
    <InputSelectbox
      select-id="selectTest"
      place-holder="select items"
      :value="testValue"
      :data-list="testList"
      :select-Hndr="selectHndr"
    />

    <router-view></router-view>
    <popup-list></popup-list>
  </div>
</template>

<script>
import PopupList from '@commons/modals/popup/PopupList.vue'

import ButtonSimple from '@commons/button/ButtonSimple.vue'
import InputSelectbox from '@commons/inputs/InputSelectbox.vue'
import InputSimple from '@commons/inputs/InputSimple.vue'
import DropDownSimple from '@commons/dropdown/DropDownSimple.vue'
export default {
  name: 'App',
  data() {
    return {
      testValue: '',
      testList: [
        {
          value: 0,
          text: 0
        },
        {
          value: 1,
          text: 1
        },
        {
          value: 2,
          text: 2
        },
        {
          value: 3,
          text: 3
        }
      ]
    }
  },
  methods: {
    inputHndr() {
      console.log('input')
    },
    clickHndr() {
      console.log('click')
    },
    selectHndr() {
      console.log('select')
    }
  },
  mounted() {
    console.log(this.$route)
  },
  components: {
    PopupList,
    ButtonSimple,
    InputSimple,
    DropDownSimple,
    InputSelectbox
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
#app .wrap_file .lab_file {
  height: 200px;
  line-height: 200px;
  background-color: pink;
}
#app .wrap_file .inp_file:focus + .lab_file,
#app .wrap_file .lab_file:hover {
  background-color: lightgoldenrodyellow;
}
</style>
