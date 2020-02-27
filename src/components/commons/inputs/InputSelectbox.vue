<template>
  <div class="comm_select_simple">
    <label :for="selectId">{{ placeHolder }}</label>
    <select name="" :id="selectId" v-model="input" @change="selectHndr" :value="value">
      <option v-for="(item, index) in dataList" :key="index" :value="item.value">{{ item.value }}</option>
    </select>
  </div>
</template>

<script>
// TODO : store 구축 후 input setter 설정 
export default {
  name: 'comm-select-simple',
  props: {
    selectId: String,
    dataList: Array,
    value: {
      type: String || Number,
      default: ''
    },
    placeHolder: {
      type: String,
      default: 'Select'
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    selectHndr: {
      type: Function,
      default: () => null
    }
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set() { 
        return this.value
      }
    }
  }
}
</script>

<style></style>
