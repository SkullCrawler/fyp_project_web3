require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
      accounts: ['
      0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e',
      '0x7019d3Cc0a363c30d0D31bF55cC6351c78f09A50'
    ],
    },
  },
};