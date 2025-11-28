import { type Chain } from "viem";

// This chain isactive and is waiting for addition to https://github.com/ethereum-lists/chains
// before it can be added to wevm/viem/chains.
export const mesherX = {
  id: 89211,
  name: "MesherX",
  nativeCurrency: {
    name: "Algen",
    symbol: "ALG",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mesher.algen.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://scan.mesher.algen.network",
      apiUrl: "https://scan.mesher.algen.network/api",
    },
  },
} satisfies Chain;
