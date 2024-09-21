import React, { useState } from 'react';
import { ethers } from 'ethers';

function Web3Demo() {
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    if(window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }
    } else {
      alert('Meta Mask not detected');
    }
  }

  return (
    <div>
      <h3>Wallet Connection</h3>
      <button onClick={requestAccount}>Connect Wallet</button>
      <h3>Wallet Address: {walletAddress}</h3>
    </div>
  );
}

export default Web3Demo;