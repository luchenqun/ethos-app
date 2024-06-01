<script setup lang="ts">
import { computed } from 'vue';
import { NConfigProvider, darkTheme } from 'naive-ui';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/vue';
import { reconnect } from '@wagmi/core';
import { useAppStore } from './store/modules/app';
import { useThemeStore } from './store/modules/theme';
import { naiveDateLocales, naiveLocales } from './locales/naive';
import { cerboDev, mudTestnet } from './constants/chain';

defineOptions({
  name: 'App'
});

const appStore = useAppStore();
const themeStore = useThemeStore();

const naiveDarkTheme = computed(() => (themeStore.darkMode ? darkTheme : undefined));

const naiveLocale = computed(() => {
  return naiveLocales[appStore.locale];
});

const naiveDateLocale = computed(() => {
  return naiveDateLocales[appStore.locale];
});

// 1. Define constants
const projectId = '01c5cd8b308c4752b74fad24cccc7b78';

// 2. Create wagmiConfig
const metadata = {
  name: 'chain app',
  description: 'chain app',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const config = defaultWagmiConfig({
  chains: [mudTestnet, cerboDev],
  projectId,
  metadata,
  enableInjected: true,
  enableWalletConnect: true
  // ...wagmiOptions // Optional - Override createConfig parameters
});

reconnect(config);
// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  themeMode: 'light',
  themeVariables: {
    '--w3m-font-family': 'Roboto, sans-serif',
    '--w3m-color-mix-strength': 40,
    '--w3m-border-radius-master': '2px'
  }
});
</script>

<template>
  <NConfigProvider
    :theme="naiveDarkTheme"
    :theme-overrides="themeStore.naiveTheme"
    :locale="naiveLocale"
    :date-locale="naiveDateLocale"
    class="h-full"
  >
    <AppProvider>
      <RouterView class="bg-layout" />
    </AppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
