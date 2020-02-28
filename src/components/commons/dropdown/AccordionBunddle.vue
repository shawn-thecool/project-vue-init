<template>
  <div class="comm_accordion">
      <!-- <accordion-panel 
        v-for="(item, index) in itemList" 
        :key="index"
        :clickHndr="clickTarget(index)" 
        :defautlToggle="index === currentOpenTarget"
        class="item_accordion" 
        >
        <template v-slot:header>
          {{item.value}}
        </template>
        <template v-slot:body>
            {{item.value}}
        </template>
      </accordion-panel> -->
    <slot :itemList="itemList" :clickTarget="clickTarget" :currentOpenTarget="currentOpenTarget"></slot>
  </div>
</template>

<script>
export default {
  name: 'comm-accordion',
  data(){
    return {
      currentOpenTarget : null
    }
  },
  props: {
    title: {
      type: String,
      default: 'title'
    },
    itemList: {
      type: Array,
      default: () => []
    }
  },
  methods : {
    clickTarget (targetIndex) {
      return () => {
        this.currentOpenTarget = targetIndex
      }
    }
  }
}
</script>

<style></style>
