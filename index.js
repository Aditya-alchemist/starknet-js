import {Account, RpcProvider } from "starknet";





const providerBlastMainnet = new RpcProvider({
  nodeUrl: 'https://starknet-mainnet.public.blastapi.io/rpc/v0_7',
});

const provider = new RpcProvider({ nodeUrl: 'http://127.0.0.1:5050/rpc' });

const address= "0x038eeEB2075B9e4a97dE0756f1516F8D33716591827BAf389e89426Fdc8Be98f";

const privateKey = '0x71d7bb07b9a64f6f78ac4c816aff4da9';
const accountAddress = '0x64b48806902a367c8598f4f95c305e8c1a1acba5f082d294a43793113115691';

const account = new Account(provider, accountAddress, privateKey);
console.log("Account address:", account.address);
console.log(account);


async function main() {
  try {
   const mainnetResp = await providerBlastMainnet.getBlockNumber();
   const mainnetresp2= await (address);
    console.log("✅ Mainnet:", mainnetResp);

  
  } catch (err) {
    console.error("❌ StarkNet.js error:", err.message);
  }
}

main();
