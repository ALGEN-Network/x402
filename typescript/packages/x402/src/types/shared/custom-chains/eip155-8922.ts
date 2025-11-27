import { type Chain } from "viem";

// This chain isactive and is waiting for addition to https://github.com/ethereum-lists/chains
// before it can be added to wevm/viem/chains.
export const algenL2Testnet = {
  id: 8922,
  name: "Algen L2 Testnet",
  nativeCurrency: {
    name: "Algen",
    symbol: "ALG",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.alg2-test.algen.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://scan.alg2-test.algen.network",
      apiUrl: "https://scan.alg2-test.algen.network/api",
    },
  },
} satisfies Chain;
