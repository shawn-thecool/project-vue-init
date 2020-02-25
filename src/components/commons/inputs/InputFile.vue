<template>
  <div class="comm_input_file">
    <input type="file" :id="id" class="inp_file" :accept="accept" @input="inputHndr" />
    <label :for="id" class="lab_file">{{ labelText }}</label>
  </div>
</template>

<script>
// TODO: label slot 적용
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
.comm_input_file {
<<<<<<< HEAD:src/components/commons/inputs/InputFile.vue
=======
  position: relative;
}
.comm_input_file .lab_file {
  display: block;
  cursor: pointer;
}
.comm_input_file .inp_file {
  position: absolute;
  z-index: -1;
  width: 100%;
  height:100%;
  top: 0;
  left: 0;
>>>>>>> f19533ebd8d3b2fe7e65059bec4120c17778e3d3:src/components/commons/inputFile/InputFile.vue
}
</style>
