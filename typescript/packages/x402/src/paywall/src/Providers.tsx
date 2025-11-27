import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from "react";
import { base, baseSepolia } from "viem/chains";

import { choosePaymentRequirement, isEvmNetwork } from "./paywallUtils";
import "./window.d.ts";
import { algenL2Testnet } from "../../types/shared/custom-chains";
import { getChainFromNetwork } from "../../types/shared/evm";
import { createConfig, http, injected, WagmiProvider } from "wagmi";

type ProvidersProps = {
  children: ReactNode;
};

/**
 * Providers component for the paywall
 *
 * @param props - The component props
 * @param props.children - The children of the Providers component
 * @returns The Providers component
 */
export function Providers({ children }: ProvidersProps) {
  const { testnet = true, cdpClientKey, appName, appLogo, paymentRequirements } = window.x402;
  const selectedRequirement = choosePaymentRequirement(paymentRequirements, testnet);

  // if (!isEvmNetwork(selectedRequirement.network)) {
  //   return <>{children}</>;
  // }

  const customChain = getChainFromNetwork(selectedRequirement.network)
  console.log("selected chain: ", customChain)

  const config = createConfig({
    chains: [customChain],
    connectors: [
      injected(),
    ],
    transports: {
      [customChain.id]: http(customChain.rpcUrls.default.http[0])
    }
  })

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          {children}
        </WagmiProvider>
    </QueryClientProvider>

    // <OnchainKitProvider
    //   apiKey={cdpClientKey || undefined}
    //   chain={chain}
    //   config={{
    //     appearance: {
    //       mode: "light",
    //       theme: "base",
    //       name: appName || undefined,
    //       logo: appLogo || undefined,
    //     },
    //     wallet: {
    //       display: "modal",
    //       supportedWallets: {
    //         rabby: true,
    //         trust: true,
    //         frame: true,
    //       },
    //     },
    //   }}
    // >
    //   {children}
    // </OnchainKitProvider>
  );
}
