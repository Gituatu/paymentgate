const CryptoJS = require('crypto-js')
const Crypto = require('crypto');

//sha512(key|txnid|amount|productinfo|firstname|email|||||||||||SALT)

let name = "Koushik Saha";
let email = "demopayacc2@gmail.com";

let message = `ays59b|txnid|10|citrine-india|${name}|${email}|||||||||||x4Y4LOt4`;

let hashedvalue = CryptoJS.SHA512(message).toString(CryptoJS.enc.Hex);

console.log(hashedvalue);

let ans = Crypto.randomBytes(10).toString("hex");
console.log(ans);