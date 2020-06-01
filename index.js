const { text2Binary, binary2Text } = require('./convert');
const { encode, decode } = require('./encode');
const { compress, decompress } = require('./compress');

module.exports = { text2Binary, binary2Text, encode, decode, compress, decompress };