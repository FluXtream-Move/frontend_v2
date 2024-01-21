"use client";
import { useState } from "react";
import { Icon } from '@iconify/react';

import {
  useWallet,
  WalletReadyState,
  Wallet,
  isRedirectable,
  WalletName,
} from "@aptos-labs/wallet-adapter-react";
import { cn } from "@/utils/styling";
import Popup from 'reactjs-popup';
import Image from "next/image";
const buttonStyles = "nes-btn is-primary";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Link from "next/link";
import { Button } from "./ui/button";


export const WalletButtons = () => {
    
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const { wallets, connected, disconnect, isLoading, account, network } = useWallet();
  const accountAddress = account?.address;
  const accountNetwork = network?.name;
  const networkIcon = wallets?.[0]?.icon;
  if (connected) {
    return (
      <>
        <button className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500" onClick={disconnect}> 
        {<Image src="https://cryptologos.cc/logos/aptos-apt-logo.svg?v=029" className="w-4 h-4 me-2" alt="Aptos Logo" />}
            {accountAddress?.slice(0, 6)}...{accountAddress?.slice(-4)}
        </button>
          
      </>
    );
  }
  if (isLoading || !wallets || wallets.length === 0) {
    return (
        <div className={cn(buttonStyles, "opacity-50 cursor-not-allowed")}>
        {isLoading ? "Loading..." : "No wallets available"}
      </div>
    );
  }

  return <WalletView wallet={wallets[0]} />;
};

const WalletView = ({ wallet }: { wallet: Wallet }) => {
  const { connect } = useWallet();
  const isWalletReady =
    wallet.readyState === WalletReadyState.Installed ||
    wallet.readyState === WalletReadyState.Loadable;
  const mobileSupport = wallet.deeplinkProvider;

  const onWalletConnectRequest = async (walletName: WalletName) => {
    try {
      await connect(walletName);
    } catch (error) {
      console.warn(error);
      window.alert("Failed to connect wallet");
    }
  };

  if (!isWalletReady && isRedirectable()) {
    // wallet has mobile app
    if (mobileSupport) {
      return (
        <button
          className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2"
          disabled={false}
          key={wallet.name}
          onClick={() => onWalletConnectRequest(wallet.name)}
          style={{ maxWidth: "300px" }}
        >
          Connect Wallet
        </button>
      );
    }
    // wallet does not have mobile app
    return (
      <button
        className='text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 me-2 mb-2'
        disabled={true}
        key={wallet.name}
        style={{ maxWidth: "300px" }}
      >
        Connect Wallet - Desktop Only
      </button>
    );
  } else {
    // desktop
    return (
      <button className="relative inline-flex items-center px-14 py-4 overflow-hidden text-lg font-medium text-green-600 border-2 border-green-600 rounded-full hover:text-white group hover:bg-gray-50"
      disabled={!isWalletReady}
        key={wallet.name}
        onClick={() => onWalletConnectRequest(wallet.name)}
        style={{ maxWidth: "250px" }}
      >
<span className="absolute left-0 block w-full h-0 transition-all bg-green-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative text-xs">Connect Wallet</span>
</button>
    );
  }
};