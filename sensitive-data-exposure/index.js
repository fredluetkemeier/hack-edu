// Original encryption function
function encrypt(str) {
    var bytes = []; // char codes
    var key = 'Kryptos';
    for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        bytes = bytes.concat([code ^ key.charCodeAt(i % 7)]);
    }
    var s = '';
    bytes.forEach(function (byte) {
        s += ('0' + (byte & 0xff).toString(16)).slice(-2);
    });

    return s;
}

// Solution
function decrypt(str) {}

// Tests
const message = 'test';

const encryptedMsg = encrypt(message);
const decryptedMsg = decrypt(encryptedMsg);

console.log('Message: ', message);
console.log('Encrypted: ', encryptedMsg);
console.log('Decrypted: ', decryptedMsg);

if (message == decryptedMsg) console.log('Success!');
else console.log('Failure! :(');
