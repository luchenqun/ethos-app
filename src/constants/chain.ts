import { type Chain } from 'viem';
export const cerboDev = {
  id: 8555,
  name: 'cbo dev',
  nativeCurrency: { name: 'cbo', symbol: 'cbo', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://dev-rpc.cerboai.com'] }
  },
  blockExplorers: {
    default: { name: 'cerbo scan', url: 'http://dev-scan.cerboai.com' }
  },
  contracts: {}
} as const satisfies Chain;
