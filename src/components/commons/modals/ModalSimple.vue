<template>
  <div class="modal_simple modal_simple_layer1">
    <div class="inner_modal">
      <div class="modal_head">
        <strong>title</strong>
      </div>
      <div class="modal_body">
        body
      </div>
      <div class="modal_foot"></div>
      <button-simple type="button" text="닫기"></button-simple>
    </div>
  </div>
</template>
<script>
import ButtonSimple from '@commons/button/ButtonSimple.vue'
export default {
  name: 'modal-simple',
  components: {
    ButtonSimple
  }
}
</script>

<style>
.modal_simple {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 0;
  text-align: center;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.7);
  vertical-align: middle;
}
.modal_simple:after {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  content: '';
}
.modal_simple .inner_modal {
  display: inline-block;
  background-color: #fff;
  white-space: normal;
  font-size:14px;
  vertical-align: middle;
  border-radius: 3px;
  min-width:300px;
}
</style>
