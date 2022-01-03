const KEY = 'Kryptos';

// Original encryption function
function encrypt(str) {
    var bytes = []; // char codes
    for (var i = 0; i < str.length; ++i) {
        var code = str.charCodeAt(i);
        bytes = bytes.concat([code ^ KEY.charCodeAt(i % 7)]);
    }
    var s = '';

    bytes.forEach(function (byte) {
        s += ('0' + (byte & 0xff).toString(16)).slice(-2);
    });

    return s;
}

// Solution
function decrypt(str) {
    const charCodes = str
        .split('')
        .map((_, i) => (i % 2 == 0 ? str.slice(i, i + 2) : ''))
        .filter((x) => x != '')
        .map((x) => parseInt(x, 16))
        .map((charCode, i) => charCode ^ KEY.charCodeAt(i % 7));

    return String.fromCharCode(...charCodes);
}

// Tests
const message = 'test';

const encryptedMsg = encrypt(message);
const decryptedMsg = decrypt(encryptedMsg);

console.log('Message  : ', message);
console.log('Encrypted: ', encryptedMsg);
console.log('Decrypted: ', decryptedMsg);

if (message == decryptedMsg) console.log('Success!');
else console.log('Failure! :(');
