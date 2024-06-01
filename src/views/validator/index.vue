<script setup lang="ts">
import { useAccount, useReconnect } from '@wagmi/vue';
import CardData from './modules/card-data.vue';
import ValidatorList from './modules/validator-list.vue';

const { status } = useAccount();
const { reconnect } = useReconnect();

const tid = setInterval(() => {
  if (status.value === 'disconnected') {
    reconnect();
  }
  if (status.value === 'connected') {
    clearInterval(tid);
  }
}, 1000);
</script>

<template>
  <NSpace vertical :size="16">
    <CardData />
    <ValidatorList />
  </NSpace>
</template>

<style scoped></style>
