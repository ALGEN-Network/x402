import { type Chain } from "viem";

// This chain isactive and is waiting for addition to https://github.com/ethereum-lists/chains
// before it can be added to wevm/viem/chains.
export const mesherXTestnet = {
  id: 892298,
  name: "MesherX Testnet",
  nativeCurrency: {
    name: "Algen",
    symbol: "ALG",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mesher-test.algen.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://scan.mesher-test.algen.network",
      apiUrl: "https://scan.mesher-test.algen.network/api",
    },
  },
} satisfies Chain;
