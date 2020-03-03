<template>
  <div class="comp_accordion_list">
    <slot
      :currentToggleIndex="currentIndex"
      :clickToggleComponentHndr="clickToggleComponentHndr"
    />
  </div>
</template>

<script>
export default {
  name: 'comp-accordion-list',
  props:{
      defaultToggleIndex : {
          type : [String,Number],
          default : '' || 0
      }
  },
  data() {
      return {
          currentIndex : this.currentIndex || 0
      }
  },
  methods: {
    clickToggleComponentHndr(toggleIndex) {
      this.currentIndex = toggleIndex
    }
  }
}
</script>

<style></style>
