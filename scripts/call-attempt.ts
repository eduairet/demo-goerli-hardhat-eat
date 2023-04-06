import { ethers, artifacts } from 'hardhat';
import {
    Contract,
    Wallet,
    ContractTransaction,
    ContractReceipt,
    BigNumber,
} from 'ethers';
import { config } from 'dotenv';
config();
const { getContractAtFromArtifact, providers } = ethers;
const { JsonRpcProvider } = providers;
const { GOERLI_URL, PRIV_KEY, DESTINATION, WINNER_EMITTER } = process.env;

const main = async () => {
    if (GOERLI_URL && PRIV_KEY && DESTINATION && WINNER_EMITTER) {
        const artifact = await artifacts.readArtifact('WinnerEmitter'),
            provider: any = new JsonRpcProvider(GOERLI_URL),
            signer: Wallet = new Wallet(PRIV_KEY, provider),
            winnerEmitter: Contract = await getContractAtFromArtifact(
                artifact,
                WINNER_EMITTER,
                signer
            );
        const gas = await winnerEmitter.estimateGas.win(DESTINATION, {
                value: 0,
            }),
            tx: ContractTransaction = await winnerEmitter.win(DESTINATION, {
                value: 0,
                gasLimit: gas,
            }),
            { transactionHash }: ContractReceipt = await tx.wait();
        console.log(`https://goerli.etherscan.io/tx/${transactionHash}`);
    } else {
        throw new Error('Check your configuration!');
    }
};

main()
    .then(() => (process.exitCode = 0))
    .catch(err => {
        console.log(err);
        process.exitCode = 1;
    });
