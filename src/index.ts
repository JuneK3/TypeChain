import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previoushash: string;
    public data: string;
    public timestamp: number;

    static calculateHash = (
        index: number,
        hash: string,
        previoushash: string,
        data: string,
        timestamp: number
    ):string => CryptoJS.SHA256(index + previoushash + timestamp + data).toString();

    constructor(
        index: number,
        hash: string,
        previoushash: string,
        data: string,
        timestamp: number){
            this.index=index;
            this.hash=hash;
            this.previoushash=previoushash;
            this.data=data;
            this.timestamp=timestamp;            
    }
}

const genesisBlock:Block = new Block(0, "20202020202", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;
const getLatestBlock = (): Block => blockchain[blockchain.length-1];
const getNewTimeStamp = ():number => Math.round(new Date().getTime() / 1000);

export {};