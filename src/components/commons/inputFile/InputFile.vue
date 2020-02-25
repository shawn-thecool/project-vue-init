<template>
  <div class="comm_input_file">
    <label :for="id">{{ labelText }}</label>
    <input type="file" :id="id" :accept="accept" @input="inputHndr" />
  </div>
</template>

<script>
export default {
  name: 'comm-input-file',
  props: {
    id: {
      type: String,
      required: true
    },
    labelText: {
      type: String,
      default: null
    },
    accept: {
      tpye: String,
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
.inp_file {
}
</style>
