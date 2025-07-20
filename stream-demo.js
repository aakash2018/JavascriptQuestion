///stream are object that helping to read data from resource or file. it help to its desitnation.
//readable -> use for read
//writable -> write to a file
//duplex -> can be used for both read and write (TCP socket);
//transform -> examples zlib streams , is kind  duplex like only

const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');
const { Transform } = require('stream');
class EncryptStream extends Transform {
    constructor(key, vector) {
        super();
        this.key = key;
        this.vector = vector;
    }

    _transform(chunk, encoding, callback) {
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.vector);
        const encrypted = Buffer.concat([cipher.update(chunk), cipher.final()]);
        this.push(encrypted);
        callback();
    }
}
const key = crypto.randomBytes(32);
const vector = crypto.randomBytes(16);

const readableStream = fs.createReadStream('nput.txt');

const gzipStream = zlib.createGzip();

const encryptStream = new EncryptStream(key,vector);
const writableStream = fs.createWriteStream('output.txt.gz.enc');

//read -> compress -> encrypt -> write
readableStream.pipe(gzipStream).pipe(encryptStream).pipe(writableStream);
console.log('streaming -> compressing -> writting data');