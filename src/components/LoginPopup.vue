<script lang="ts" setup>
import { useLoginPopupStore } from '@/stores/loginpopup'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { computed, reactive } from 'vue'

const store = useLoginPopupStore()

interface FormState {
  username: string
  password: string
}

const formState = reactive<FormState>({
  username: '',
  password: ''
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>
<template>
  <div
    v-if="store.popup"
    class="popup-position popup-layout popup-background"
    @click.self="store.close"
  >
    <div class="popup-content popup-content-layout popup-content-style popup-content-background">
      <a-form
        :model="formState"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
        layout="vertical"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="用户名"
          name="username"
          :colon="false"
          :rules="[{ required: true, message: '请输入用户名!' }]"
        >
          <a-input v-model:value="formState.username">
            <template #prefix> <UserOutlined class="site-form-item-icon" /> </template
          ></a-input>
        </a-form-item>

        <a-form-item
          label="密码"
          name="password"
          :colon="false"
          :rules="[{ required: true, message: '请输入密码!' }]"
        >
          <a-input-password v-model:value="formState.password">
            <template #prefix>
              <LockOutlined class="site-form-item-icon" />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button
            size="large"
            :disabled="disabled"
            style="width: 100%"
            type="primary"
            html-type="submit"
            >登录</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<style></style>
