require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note soap undo hunt hen equal ghost'; 
let testAccounts = [
"0xc859de52d1924b49c5778213906fc436d891696e19895f6c94284dacf75521b8",
"0xf0eea58980e4ab968f4bcedb573c4199e9fa373ed6656888767fb05dc4868295",
"0xe58b3488988c099cdaf79b1117dfe7dac23ca3d662974810f67a05eadb7b0091",
"0x6126ce1d288cd86cc025504ce0f0785fe5bc84db56dc3a1fc6011a26bc468771",
"0x43da3ca9ab7895bf401d7490d5bc94a9dc1401d8a76148683e810b2e77cb1cd7",
"0xb6df219a68ceb3431398fa164e424439625d9d69d9845d1bbcce9b3151150c04",
"0xcda1bc0bf1159b9eb75ba9a95a8af99786862aeef43874b09b395324637dae0e",
"0x1c69d620ef311ef294731492bd56249e641a06569247a18dbba692e9fa0e30af",
"0x15355b005df3964225d174e3c686759b7343c0ee6e55dc06b2c5dd70e570d7f5",
"0x2e7f659e9b19279c10d3a6641a424fe4c0a958d2459f8ba3d87557f3ecaf4a6a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

