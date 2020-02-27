<template>
  <div>
    <h2>로그인 페이지</h2>
    <div>
      <router-link to="/login">로그인</router-link>
    </div>
    <div>
      <router-link to="/apply">이용 신청</router-link>
    </div>
    <div>
      <router-link to="/history">이용 내역</router-link>
    </div>
    <div>
      <strong>popup test</strong>
      <button type="button" @click="openPopupTest1">open popup</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapMutations } = createNamespacedHelpers('popup')
export default {
  name: 'page-login',
  methods: {
    ...mapMutations(['createPopup', 'removePopup']),
    openPopupTest1() {
      const id = 'popup-test-1'
      this.createPopup({
        id: id,
        type: 'popup',
        onClose: () => this.removePopup({ id }),
        onOk: () => this.openPopupTest2(),
        onCancel: () => this.removePopup({ id })
      })
    },
    openPopupTest2() {
      const id = 'popup-test-2'
      this.createPopup({
        id: id,
        type: 'alert',
        onClose: () => this.removePopup({ id }),
        onOk: () => this.removePopup({ id }),
        onCancel: () => this.removePopup({ id })
      })
    }
  }
}
</script>

<style></style>
