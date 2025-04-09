# BCrypty - A FullStack D-App FYP Project

BCrypty is a decentralized application (D-App) that showcases the integration of Ethereum-based smart contracts with a modern web development stack. This project leverages React, Vite, Solidity, and Material-UI to create a seamless user experience for blockchain-based operations.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract Details](#smart-contract-details)
- [Testing](#testing)
- [License](#license)

---

## Features

- **Blockchain Integration**: Ethereum-based smart contracts for secure and transparent operations.
- **Wallet Connectivity**: Integrated MetaMask API for seamless wallet connection.
- **Modern Frontend**: Built with React and styled using Material-UI.
- **Developer-Friendly**: Vite for fast builds and Hot Module Replacement (HMR).
- **Local Development**: Hardhat Node for deploying and testing smart contracts locally.
- **Robust Testing**: Chai assertion library for comprehensive testing of smart contracts.

---

## Tech Stack

### Frontend
- **React** with **Vite**: A fast frontend framework and build tool.
- **Material-UI**: For a sleek, responsive, and modern UI design.

### Backend
- **Solidity**: Ethereum-based smart contracts.
- **Hardhat**: Local Ethereum node for development and testing.

### Blockchain
- **Ethereum**: Blockchain for executing smart contracts.

### Testing
- **Chai**: Assertion library for smart contract testing.
- **Hardhat Testing Suite**: For local contract deployment and testing.

---

## Installation

To set up and run the project locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MetaMask browser extension
- Hardhat CLI

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SkullCrawler/fyp_project_web3.git
   cd fyp_project_web3
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Hardhat for local blockchain**:
   ```bash
   npx hardhat node
   ```

4. **Compile and deploy smart contracts**: Open a new terminal and run:
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Connect to MetaMask**:
   * Add the local Hardhat network to MetaMask.
   * Use the private keys from Hardhat Node to import accounts into MetaMask.

## Usage

1. Launch the application in your browser (default: http://localhost:5173).
2. Connect your MetaMask wallet.
3. Interact with the D-App features powered by Ethereum smart contracts.

## Smart Contract Details

The smart contracts are written in Solidity and deployed on a local Hardhat node for testing. Key features include:
* **Secure Transactions**: Ensure integrity and transparency.
* **Modular Design**: Easy to extend and integrate additional functionality.

Deployment contracts are deployed using Hardhat scripts located in the `scripts/` directory.

## Testing

1. Run the Hardhat Node:
   ```bash
   npx hardhat node
   ```

2. Execute test cases:
   ```bash
   npx hardhat test
   ```

3. Testing Framework:
   * **Chai**: Used for assertions.
   * **Mocha**: Run the test cases.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for review.

## Acknowledgments

* React
* Hardhat
* Material-UI
* MetaMask
* Ethereum
