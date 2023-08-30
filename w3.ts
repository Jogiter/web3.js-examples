import Web3 from 'web3';
import 'dotenv/config';
import debug from 'debug';

const log = debug('app:web3');

// Connect to the Ethereum network using the HTTP provider
const network = process.env.ETHEREUM_NETWORK;
const apiKey = process.env.INFURA_API_KEY;
const providerUrl = `https://${network}.infura.io/v3/${apiKey}`;

log(`web3 version: ${Web3.version}`);
log(`Connecting to ${network} network with Infura API key ${apiKey}`);
log(`Provider URL is ${providerUrl}`);

const httpProvider = new Web3.providers.HttpProvider(providerUrl);
const web3 = new Web3(httpProvider);

export default web3;