import { createConfig, createStorage, http } from '@wagmi/vue';
import { coinbaseWallet, injected, metaMask, walletConnect } from '@wagmi/connectors';
import { cerboDev, mudTestnet } from './chain';

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [mudTestnet, cerboDev],
  connectors: [
    metaMask(),
    injected(),
    coinbaseWallet({ appName: 'chain app' }),
    walletConnect({ projectId: '01c5cd8b308c4752b74fad24cccc7b78' })
  ],
  storage: createStorage({ storage: localStorage, key: 'vite-vue' }),
  transports: {
    [cerboDev.id]: http(),
    [mudTestnet.id]: http()
  }
});
