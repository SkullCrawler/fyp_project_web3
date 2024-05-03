import abi from "./Transactions.json";

export const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
export const contractABI = abi.abi;
export const networks = {
  localhost: {
    chainId: 31337,
    contractAddress,
  },
};
