require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone strong cost meadow upset harvest clock metal gaze'; 
let testAccounts = [
"0x44b208b3e0acc3c3679b7e80667b6d69589b724eb663598faa83fc019af775be",
"0x0c0d57ddab3abf3cbd520328281fc72d307ada8531d8c9e5682cce395f3372ae",
"0x5879364f35b28ae385ad4a5a8918c91239bec99d79c3775627e52cbaa588ecdf",
"0x11ebb06e094d0203bae955760f9768eeb4b3d2d4e7e3adc887780d9f9d04286e",
"0xea6d8dee082f7f53b617d279a58836c6c9bda2cd617aecd9f34afbb9b193e531",
"0x12d3ec3e2a046a6a3b71e182f4101abef46498d97e9f009109954c632be1ffbd",
"0x1955c91dbd6570cf54f5e2b74e5b819a06a06259384c514416345ba0b1f86f44",
"0x469c09700a330d1f3828971feea81a31e55141fa7aca2db01905e80e1312f497",
"0xf27708080a5bb817e815af98fbef992effcfe26f95a6fe85ad89d4a4f56773c3",
"0x7f0ea20df598b1769df612d3604cc85db32fc5cd80026035bd9d88bce7258a0e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

