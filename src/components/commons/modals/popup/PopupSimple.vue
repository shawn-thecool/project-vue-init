<template>
    <div class="comm_popup_simple">
      <div class="popup_header">
        <h3>[{{ type }}]:{{ id }}</h3>
        <button type="button" @click="onClose">onClose()</button>
      </div>
      <div class="popup_body">body</div>
      <div class="popup_footer">
        <button type="button" @click="onCancel">onCancel()</button>
        <button type="button" @click="onOk">onOk()</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'comm-popup-simple',
  props: {
    id: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      default: null
    },
    onClose: {
      type: Function,
      default: () => null
    },
    onOk: {
      type: Function,
      default: () => null
    },
    onCancel: {
      type: Function,
      default: () => null
    }
  }
}
</script>

<style scoped>
.comm_popup_simple {
  overflow: hidden;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  border-radius: 10px;
  background-color: #fff;
  z-index: 110;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.5);
}
.popup_body {
  margin: 24px 0;
}
.popup_footer {
  margin: 24px 0;
}
</style>
