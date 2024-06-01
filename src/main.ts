import { createApp } from 'vue';
import { WagmiPlugin } from '@wagmi/vue';
import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import './plugins/assets';
import { setupDayjs, setupIconifyOffline, setupLoading, setupNProgress } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupI18n } from './locales';
import { config } from './constants/config';
import App from './App.vue';

async function setupApp() {
  const queryClient = new QueryClient();

  setupLoading();

  setupNProgress();

  setupIconifyOffline();

  setupDayjs();

  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  setupI18n(app);

  app.use(WagmiPlugin, { config, reconnectOnMount: false });
  app.use(VueQueryPlugin, { queryClient });

  app.mount('#app');
}

setupApp();
