require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goreli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/i6nL-ljOSqULHKFdfpf67pRYUjwRNFjp',
      accounts: ['456adfcf31519f901610983b95d48b11e47985657014ec3a3d0cf94ff16ce176'],
    },
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545', // Binance Smart Chain Testnet URL
      chainId: 97, // Chain ID for BSC Testnet
      accounts: ['456adfcf31519f901610983b95d48b11e47985657014ec3a3d0cf94ff16ce176'], // Replace with your BSC Testnet mnemonic private key
    },
  },
};
