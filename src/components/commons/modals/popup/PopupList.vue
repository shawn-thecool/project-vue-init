<template>
    <div class="comm_popup_list">
      <popup-simple
        v-for="popup in popups"
        :key="popup.id"
        :id="popup.id"
        :type="popup.type"
        :onClose="popup.onClose"
        :onCancel="popup.onCancel"
        :onOk="popup.onOk"
      >
      </popup-simple>
      <popup-dimmed v-if="hasPopup"></popup-dimmed>
    </div>
</template>

<script>
import PopupDimmed from '@commons/modals/popup/PopupDimmed.vue'
import PopupSimple from '@commons/modals/popup/PopupSimple.vue'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('popup')

export default {
  name: 'comm-popup-list',
  computed: {
    ...mapGetters(['popups', 'hasPopup'])
  },
  components: {
    PopupDimmed,
    PopupSimple
  }
}
</script>


