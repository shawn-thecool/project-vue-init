<template>
  <div class="comm_input_simple">
    <input class="inp_simple" :type="type" :id="id" @input="inputHndr" />
    <label class="lab_simple" :for="id">{{ label }}</label>
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
      validator: value => ['text', 'number'].indexOf(value) !== -1
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
  position: relative;
}
.comm_input_simple .lab_simple {
  display: block;
  cursor: pointer;
}
.comm_input_simple .inp_simple {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
