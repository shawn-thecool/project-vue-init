<template>
  <button type="button" :class="['comp-commons-button',...classNames]" @click="onClickButtonHandler">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'comp-commons-button',
  props : {
      classNames : Array,
      onClickButtonHandler : Function
  }
}
</script>

<style>
    .comp-commons-button{width:100%}
</style>
