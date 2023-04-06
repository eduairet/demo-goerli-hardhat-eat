import { ethers } from 'hardhat';
const { getContractFactory } = ethers;

async function main(): Promise<void> {
    const WinnerEmitter = await getContractFactory('WinnerEmitter'),
        winnerEmitter = await WinnerEmitter.deploy();

    await winnerEmitter.deployed();

    console.log(`WinnerEmitter address: ${winnerEmitter.address}`);
    if (winnerEmitter.deployTransaction.chainId === 5) {
        console.log(`Block explorer:`);
        console.log(
            `https://goerli.etherscan.io/address/${winnerEmitter.address}`
        );
    }
}

main()
    .then(() => (process.exitCode = 1))
    .catch(error => {
        console.error(error);
        process.exitCode = 1;
    });
