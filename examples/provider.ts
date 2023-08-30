import web3 from '../w3';

web3.eth.getBlockNumber().then((result) => {
    console.log("Latest Ethereum Block is ", result);
});

web3.eth.getAccounts().then((result) => {
    console.log("Accounts are ", result);
})

// web3.eth.getBalance('').then((result) => {
//     console.log("Balance is ", result);
// })

web3.eth.getChainId().then(console.log)