<template>
  <div class="comm_drop_down_simple">
    <strong class="tit_drop">
      <button type="button" class="btn_drop" @click="toggle">
        {{ title }}
      </button>
    </strong>
    <transition >
        <ul class="list_drop" v-show="isToggle">
            <slot name="DropDownItemList"></slot>
        </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'comm-drop-down-simple',
  data() {
    return {
      isToggle: false
    }
  },
  props: {
    title: {
      type: String,
      default: 'title'
    }
  },
  methods: {
    toggle() {
      this.isToggle = !this.isToggle
    }
  }
}
</script>

<style>
.comm_drop_down_simple {
  position: relative;
}
.comm_drop_down_simple .tit_menu {
  display: block;
  border: 1px solid #000;
}
.comm_drop_down_simple .list_menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: -1px;
  border: 1px solid #000;
}
</style>
