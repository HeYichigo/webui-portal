<script lang="ts" setup>
import { LoginOutlined } from '@ant-design/icons-vue'
import LoginPopup from '@/components/LoginPopup.vue'
import { useLoginPopupStore } from '@/stores/loginpopup'
import SignupPopup from '@/components/SignupPopup.vue'
const { open } = useLoginPopupStore()
const letopen = () => {
  console.log('open')
  open()
}
</script>
<template>
  <div class="notice notice-font">
    <div class="title title-background-img"></div>
    <p>红旗“智·绘”AIGC平台</p>
    <a-button class="btn-text btn-style" type="primary" shape="round" @click="letopen">
      <template #icon>
        <LoginOutlined />
      </template>
      点击进入
    </a-button>
  </div>
  <LoginPopup></LoginPopup>
  <SignupPopup></SignupPopup>
  <div class="background-img"></div>
</template>
<style>
.title {
  height: 150px;
  width: 150px;
  margin-bottom: 30px;
}
.btn-style {
  margin-top: 10px;
}
.btn-text {
  width: 250px;
  height: 50px;
  font-size: large;
}
</style>
