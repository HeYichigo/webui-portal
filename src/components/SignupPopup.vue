<script lang="ts" setup>
import { useSignupStore } from '@/stores/signuppopup'
import { computed, onMounted, reactive, ref } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import type { SelectProps } from 'ant-design-vue'
import { get_orgs_list, signup } from '@/api'
import { message } from 'ant-design-vue'
const signupStore = useSignupStore()
const isLoading = ref(false)
interface SignupForm {
  name: string
  username: string
  password: string
  org: string
}
const options = ref<SelectProps['options']>([])
onMounted(() => {
  get_orgs_list().then((data) => {
    let orgs: Array<any> = data.data
    options.value = orgs.map((org) => ({
      label: `${org.department}/${org.domain}`,
      value: org.id
    }))
  })
})
const formState = reactive<SignupForm>({
  name: '',
  username: '',
  password: '',
  org: ''
})

const onFinish = async (values: SignupForm) => {
  isLoading.value = true
  // values 发送给api
  try {
    const { name, username, password, org } = values
    await signup(name, username, password, parseInt(org))
    setTimeout(() => {
      message.success('注册成功！')
      isLoading.value = false
    }, 1.5 * 1000)
    // 成功后将user-store更新为signin
    setTimeout(() => {
      signupStore.close()
    }, 2 * 1000)
  } catch (error) {
    message.error('账号已存在！')
    isLoading.value = false
  }

  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const disabled = computed(() => {
  return !(formState.username && formState.password && formState.name && formState.org)
})
const handleChange = (value: string) => {
  console.log(`selected ${value}`)
}
</script>

<template>
  <div v-if="signupStore.popup" class="popup-position popup-layout" @click.self="signupStore.close">
    <div
      class="popup-signup-content popup-content-layout popup-content-style popup-content-background"
    >
      <a-form
        :model="formState"
        :wrapper-col="{ span: 24 }"
        autocomplete="off"
        layout="vertical"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          label="姓名"
          name="name"
          :colon="false"
          :rules="[{ required: true, message: '请输入姓名!' }]"
        >
          <a-input v-model:value="formState.name">
            <template #prefix> <UserOutlined class="site-form-item-icon" /> </template
          ></a-input>
        </a-form-item>
        <a-form-item
          label="账号"
          name="username"
          :colon="false"
          :rules="[{ required: true, message: '请输入账号!' }]"
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
        <a-form-item
          label="部门"
          name="org"
          :colon="false"
          :rules="[{ required: true, message: '请选择部门!' }]"
        >
          <a-select
            ref="select"
            v-model:value="formState.org"
            :options="options"
            @change="handleChange"
          ></a-select>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 24 }">
          <a-button
            size="large"
            style="width: 40%; margin-right: 10px"
            danger
            @click="signupStore.close"
            >返回</a-button
          >
          <a-button
            size="large"
            :disabled="disabled"
            style="width: 55%"
            type="primary"
            html-type="submit"
            :loading="isLoading"
            >注册</a-button
          >
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style></style>
