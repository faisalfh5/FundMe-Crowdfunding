// import { ethers } from 'ethers';
// import Web3Modal from 'web3modal';
import metaMask from '../connectors/metaMask';
import PortisWallet from '../connectors/portis';
import FormaticWallet from '../connectors/fortmatic';
import CoinbaseWallet from '../connectors/coinbase';
// import React from 'react';

const connectModal = async (label) => {
  switch (label) {
    case 'Metamask':
      console.log('label', label);
      await metaMask();
      break;

    case 'Portis':
      await console.log('label', label);
      PortisWallet();
      break;

    case 'Fortmatic':
      console.log('label', label);
      await FormaticWallet();
      break;

    case 'Coinbase':
      await CoinbaseWallet();
      break;

    default:
      break;
  }
};

export default connectModal;
