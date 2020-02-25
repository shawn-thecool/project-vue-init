<template>
  <div class="comm_alert_simple">
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="body"></slot>
    </div>
    <div>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'comm-alert-simple',
}
</script>

<style>
.comm_alert_simple {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 200px;
  width: 200px;
  background-color: #333;
  transform: translate(-50%, -50%);
  color: #fff;
}
</style>
