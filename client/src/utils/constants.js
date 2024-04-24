import abi from "./Transactions.json";

export const contractAddress = "0x58c79bcd9Cfa499DaC5F90a43C0E9389294042d6";
export const contractABI = abi.abi;
export const networks = {
  mainnet: {
    chainId: 1, // Ethereum mainnet chain ID
    contractAddress: "0x123456789ABCDEF", // Replace with your mainnet contract address
  },
  rinkeby: {
    chainId: 4, // Ethereum Rinkeby testnet chain ID
    contractAddress: "0x987654321FEDCBA", // Replace with your Rinkeby contract address
  }, // Add more networks as needed
};
