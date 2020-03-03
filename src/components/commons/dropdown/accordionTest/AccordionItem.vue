<template>
  <accordion-base>
    <strong @click="toggleHndr">
      아코디언 테스트
      {{ isToggle }}
    </strong>
    <p v-show="isToggle">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit necessitatibus nisi unde
      voluptas aspernatur provident possimus commodi harum repellat? Impedit veritatis ipsa magnam
      saepe maxime ipsam, expedita recusandae exercitationem? Tenetur.
    </p>
  </accordion-base>
</template>

<script>
import AccordionBase from '@commons/dropdown/accordionTest/AccordionBase.vue'
export default {
  name: '',
  components: {
    AccordionBase
  },
  data() {
    return {
      isToggle: false
    }
  },
  props: {
    toggleIndexData: {
      type: [Number, String],
      default: () => null
    },
    standardToggleData: {
      type: [Number, String],
      default: 0
    },
    clickHndr: {
      type: Function,
      default: () => null
    }
  },
  created() {
    this.isToggle = this.toggleIndexData === this.standardToggleData
  },
  watch : {
      standardToggleData (){
          this.isToggle = (this.toggleIndexData === this.standardToggleData)
      }
  },
  methods: {
    toggleHndr() {
      this.clickHndr(this.toggleIndexData)
      this.isToggle = !this.isToggle
    }
  }
}
</script>

<style></style>
