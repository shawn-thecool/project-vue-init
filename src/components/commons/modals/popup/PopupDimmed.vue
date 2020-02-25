<template>
  <div class="popup_dimmed" @click="removeLastPopup"></div>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('popup')

export default {
  name: 'comm-popup-dimmed',
  mounted() {
    disableBodyScroll(document.body)
  },
  destroyed() {
    clearAllBodyScrollLocks()
  },
  methods: {
    ...mapMutations(['removeLastPopup'])
  }
}
</script>

<style scoped>
.popup_dimmed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #000;
  opacity: 0.6;
}
</style>
