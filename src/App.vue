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
        <ul>
          <li v-for="(item, index) in testList" :key="index" class="item_drop">{{ index }}</li>
        </ul>
      </template>
    </drop-down-simple>

    <InputSelectbox
      select-id="selectTest"
      place-holder="select items"
      :value="testValue"
      :data-list="testList"
      :select-Hndr="selectHndr"
    />
    <accordion-bunddle :item-list="testList">
      <template v-slot="panel">
        <accordion-panel
          v-for="(item, index) in panel.itemList"
          :key="index"
          :clickHndr="panel.clickTarget(index)"
          :defautlToggle="index === panel.currentOpenTarget"
          class="item_accordion"
        >
          <template v-slot:header>
            {{ item.value }}
          </template>
          <template v-slot:body>
            {{ item.value }}
          </template>
        </accordion-panel>
      </template>
    </accordion-bunddle>
    <!-- test -->
    <accordion-item :toggle-data="0"></accordion-item>
    <!-- // test -->
    <AccordionList
      v-slot="{ currentToggleIndex, clickToggleComponentHndr }"
      :default-toggle-index="0"
    >
      <accordion-item
        v-for="(item, index) in testList"
        :key="index"
        :toggle-index-data="index"
        :standard-toggle-data="currentToggleIndex"
        :click-hndr="clickToggleComponentHndr"
      />
      <!-- <accordion-item  toggle-index-data="ㄴ" :standard-toggle-data="currentToggleIndex" :click-hndr="clickToggleComponentHndr"></accordion-item> -->
    </AccordionList>
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
import AccordionBunddle from '@commons/dropdown/AccordionBunddle.vue'
import AccordionPanel from '@commons/dropdown/AccordionPanel.vue'
import AccordionItem from '@commons/dropdown/accordionTest/AccordionItem.vue'

import AccordionList from '@commons/dropdown/accordionTest/AccordionList.vue'

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
    InputSelectbox,
    AccordionBunddle,
    AccordionPanel,
    AccordionItem,
    AccordionList
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
