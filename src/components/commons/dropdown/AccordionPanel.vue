<template>
  <div class="comm_accordion_panel">
    <div class="item_accordion">
      <button type="button" @click="toggle">
        <slot name="header" :item="item"></slot>
      </button>
      <div class="body_item" v-show="isToggle">
        <slot name="body" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comm-accordion-panel',
  props: {
    title: {
      type: String,
      default: 'title'
    },
    item: {
      type: Object,
      default: () => ({
        value: ''
      })
    },
    clickHndr: {
      type: Function,
      default: () => null
    },

    defautlToggle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isToggle: {
      get() {
        return this.defautlToggle
      },
      set() {
        this.clickHndr()
      }
    }
  },
  methods: {
    toggle() {
      this.isToggle = !this.isToggle
    },
  }
}
</script>

<style></style>
