<template>
  <button type="button" :class="getClassListByBtnType" @click="clickHndr">
    {{ text }}
  </button>
</template>

<script>
// TODO: slot 적용
// TODO: icon 적용

const BUTTON_TYPE_CLASSLIST_MAPPER = {
  default: ['comm-button-simple'],
  warning: ['comm-button-simple', 'on-warning'],
  confirm: ['comm-button-simple', 'on-confirm'],
  error: ['comm-button-simple', 'on-error']
}

export default {
  name: 'comm-button-simple',
  props: {
    text: {
      type: String,
      required: true
    },
    buttonType: {
      type: String,
      default: 'default'
    },
    clickHndr: {
      type: Function,
      default: () => null
    }
  },
  computed: {
    getClassListByBtnType() {
      return BUTTON_TYPE_CLASSLIST_MAPPER[this.buttonType] || BUTTON_TYPE_CLASSLIST_MAPPER.default
    }
  }
}
</script>

<style scoped>
.comm-button-simple {
  width: 100%;
}
.on-warning {
  color: gold;
}
.on-confirm {
  color: green;
}
.on-error {
  color: red;
}
</style>
