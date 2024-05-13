<script lang="ts" setup>
import { useLoginPopupStore } from '@/stores/loginpopup'

const store = useLoginPopupStore()
</script>
<template>
  <div
    v-if="store.popup"
    class="popup-position popup-layout popup-background"
    @click.self="store.close"
  >
    <div class="popup-content popup-content-layout popup-content-background"></div>
  </div>
</template>
<style></style>
