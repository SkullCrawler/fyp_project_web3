import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import Loader from "./Loader";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  // const [selectedWallet, setSelectedWallet] = useState(null);

  // const handleSelectWallet = (wallet) => {
  //   setSelectedWallet(wallet);
  // };

  // const handleConnectWallet = () => {
  //   if (selectedWallet === "TRX") {
  //     // Logic to connect Tron wallet
  //     console.log("Connecting Tron wallet");
  //   } else if (selectedWallet === "MetaMask") {
  //     // Logic to connect MetaMask wallet
  //     console.log("Connecting MetaMask wallet");
  //   } else if (selectedWallet === "BNB") {
  //     // Logic to connect BNB wallet
  //     console.log("Connecting BNB wallet");
  //   }
  //   // Add more conditions for other wallet types if needed
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    //   if (!selectedWallet) {
    //     console.error("Please select a wallet.");
    //     return;
    //   }

    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) {
      console.error("Please fill in all the required fields.");
      return;
    }

    //   // Logic to send a transaction using the selected wallet
    //   console.log(`Sending transaction using ${selectedWallet} wallet`);
    sendTransaction();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Bcrypty.
          </p>
          {/* <div>
            <div className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
              <p className="text-white text-base font-semibold">Select a Wallet</p>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <button
                type="button" // Explicitly specify the type as "button"
                className={`rounded-l-2xl ${companyCommonStyles} ${selectedWallet === "TRX" ? "selected" : ""}`}
                onClick={() => handleSelectWallet("TRX")}
              >
                Tron
              </button>
              <button
                type="button" // Explicitly specify the type as "button"
                className={`${companyCommonStyles} ${selectedWallet === "MetaMask" ? "selected" : ""}`}
                onClick={() => handleSelectWallet("MetaMask")}
              >
                MetaMask
              </button>
              <button
                type="button" // Explicitly specify the type as "button"
                className={`rounded-r-2xl ${companyCommonStyles} ${selectedWallet === "BNB" ? "selected" : ""}`}
                onClick={() => handleSelectWallet("BNB")}
              >
                BNB
              </button>
            </div>
            {selectedWallet && (
              <div className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                <h3 className="text-white text-base font-semibold">Selected Wallet: {selectedWallet}</h3>
              </div>
            )}
          </div> */}
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Amount" name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
            <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Send now
                </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
