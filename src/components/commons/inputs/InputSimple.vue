<template>
  <div class="comm_input_simple">
    <label :for="id">{{ label }}</label>
    <input :type="type" :id="id" :accept="accept" @input="inputHndr" />
  </div>
</template>

<script>
export default {
  name: 'comm-input-simple',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      validator: value => ['text', 'number', 'file'].indexOf(value) !== -1
    },
    accept: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    inputHndr: {
      type: Function,
      default: () => null
    }
  }
}
</script>

<style scoped>
.comm_input_simple {
}
</style>
