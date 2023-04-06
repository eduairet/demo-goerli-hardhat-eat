import { ethers } from 'hardhat';

async function main() {}

main()
    .then(() => (process.exitCode = 1))
    .catch(error => {
        console.error(error);
        process.exitCode = 1;
    });
