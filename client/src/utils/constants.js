import abi from "./Transactions.json";

export const contractAddress = "0x7331F819434ebFf5aFb151eF4d8E2149fB12751A";
export const contractABI = abi.abi;
export const networks = {
  localhost: {
    chainId: 31337,
    contractAddress,
  },
};
