<template>
  <div class="comm_input_number">
    <label :for="id">{{ labelText }}</label>
    <input type="number" :id="id" @input="inputHndr" />
  </div>
</template>

<script>
export default {
  name: 'comm-input-number',
  props: {
    id: {
      type: String,
      required: true
    },
    labelText: {
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
.comm_input_number {
}
</style>
