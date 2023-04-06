import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import { config as dotenvCongig } from 'dotenv';
dotenvCongig();
const { GOERLI_URL, PRIV_KEY } = process.env;

const config: HardhatUserConfig = {
    solidity: '0.8.18',
    networks: {
        goerli: {
            url: GOERLI_URL,
            accounts: PRIV_KEY ? [PRIV_KEY] : undefined,
        },
    },
};

export default config;
