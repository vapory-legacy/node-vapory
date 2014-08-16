var Trie = require('merkle-patricia-tree');
var levelup = require('levelup');
var Ethereum = require('../');
var Block = Ethereum.Block;
var Transaction = Ethereum.Transaction;
var VM = Ethereum.VM;

var rawBlock = [
    [
        new Buffer('dc24f287299b4bf5eb10b1a7f7a91ba5ad6565a47ff7931af1453c18abcbea81', 'hex'),
        new Buffer('1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347', 'hex'),
        new Buffer('d13d825eb15c87b247c4c26331d66f225a5f632e', 'hex'),
        new Buffer('c542e9dae3ee952a7f176ee33daccb806086a83fca7a0fa2062ea391deb6600b', 'hex'),
        new Buffer('00', 'hex'),
        new Buffer('41638c', 'hex'),
        new Buffer('1c', 'hex'),
        new Buffer('09184e72a000', 'hex'),
        new Buffer('0ed8c9', 'hex'),
        new Buffer('00', 'hex'),
        new Buffer('5389427a', 'hex'),
        new Buffer('00', 'hex'),
        new Buffer('235735955e96bdb427185505baa9770bb02bbebcd2f1c1e805d2d3a678ddfc2b', 'hex')
    ],
    [],
    []
];

var rawTransaction = [
    //nonce
    new Buffer('00', 'hex'),
    //gas price 10000000000000
    new Buffer('09184e72a000', 'hex'),
    //gas limit
    new Buffer('2710', 'hex'),
    //to
    new Buffer('0000000000000000000000000000000000000000', 'hex'),
    //value 100000000000000000
    new Buffer('016345785d8a0000', 'hex'),
    //init
    new Buffer('7f42616e6b00000000000000000000000000000000000000000000000000000000600054', 'hex'),

    //v, r, s
    new Buffer('1b', 'hex'),
    new Buffer('fb456128b2d58bee95ed9470e514a5d13905bb0c291e92e9f6e2ce3adc4c96f5', 'hex'),
    new Buffer('227ed9e23b945e19dd7f46018d8d320a403d793f0c7e7fa2189c563f3b510093', 'hex')
];

var newBlock = new Block(rawBlock);

if(newBlock.header.validatePOW()){
    console.log("valid POW");
}

console.log(newBlock.header.parentHash);
