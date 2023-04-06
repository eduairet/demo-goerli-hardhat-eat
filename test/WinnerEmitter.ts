import { ethers } from 'hardhat';
import { assert, expect } from 'chai';
import {
    Contract,
    ContractFactory,
    ContractReceipt,
    ContractTransaction,
} from 'ethers';

const { getContractFactory } = ethers;

const deploy = async (contractName: string): Promise<Contract> => {
    const MyContract: ContractFactory = await getContractFactory(contractName);
    const myContract: Contract = await MyContract.deploy();
    await myContract.deployed();
    return myContract;
};

describe('Test WinnerEmitter', async () => {
    let winnerEmitter: Contract, destination: Contract, logData: string;
    const winemAd: string = '0x5FbDB2315678afecb367f032d93F642f64180aa3',
        destAd: string = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
    it('Sould deploy both contracts', async () => {
        winnerEmitter = await deploy('WinnerEmitter');
        destination = await deploy('Destination');
        expect(winnerEmitter).to.have.property('address');
        expect(destination).to.have.property('address');
    });
    it('Both contracts should have known addresses', async () => {
        assert.equal(winnerEmitter.address, winemAd);
        assert.equal(destination.address, destAd);
    });
    it('WrittenEmitter should call Destination.attempt()', async () => {
        const tx: ContractTransaction = await winnerEmitter.win(
            destination.address
        );
        const receipt: ContractReceipt = await tx.wait();
        expect(receipt).to.have.property('transactionHash');
        logData = receipt.logs[0].data;
    });
    it('Destination Winner() event should contain WinnerEmitter address', async () => {
        assert.include(logData.toLowerCase(), winemAd.slice(2).toLowerCase());
    });
});
