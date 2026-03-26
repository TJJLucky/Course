import crypto from 'crypto';
process.env.NODE_OPTIONS = "--openssl-legacy-provider";

function desEncrypt(text, key) {
    // key 必须为 8 字节
    key = Buffer.from(key).slice(0, 8);
    console.log(Buffer.from([32, 16]));
    const cipher = crypto.createCipheriv('des-ecb', key, null);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function desDecrypt(encryptedText, key) {
    key = Buffer.from(key).slice(0, 8);
    const decipher = crypto.createDecipheriv('des-ecb', key, null);
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
    console.log(decrypted);
    decrypted += decipher.final('utf8');
    console.log(decrypted);
    return decrypted;
}




console.log('DES加密：', desEncrypt('Hello, World!11111111111aa', 'mysecretkey'));
console.log('DES解密：', desDecrypt(desEncrypt('Hello, World!11111111111aa', 'mysecretkey'), 'mysecretkey'));