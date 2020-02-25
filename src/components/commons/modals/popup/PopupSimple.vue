<template>
  <div class="comm_popup_simple">
    <div class="popup_header">header</div>
    <div class="popup_body">body</div>
    <div class="popup_footer">footer</div>
  </div>
</template>

<script>
export default {
  name: 'comm-popup-simple',
  props: {
    type: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
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
</style>
