# compressex

This tiny library helps you to transform texts to binary and back, encode for a secure transmission and decode back, also to compress texts to a smaller size for efficient storage and decompress when needed.

I created this lib to implement some basic algorithms I wrote, hope anybody who goes through this finds it interesting.

## compressex? ##

If you have a text that you want to compress or encode or just transform it to binary, this library will be useful to you.

* If a user has a large text that he wants to compress for it to take less memory space, he could use the compress() function available inside compressex package to transform it into a array of objects and could later transform it back to the orginal text using the decompress() function, whenever needed.

### Example ###

```
compressex.compress('aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f');
/* [
  { 'aabx aabx': '14,26,40' },
  'c',
  { 'fd fu': '17' },
  'y',
  { 'tfd f': '12' },
  'gs',
  { 'fd ff': '5' },
  'd f'
] */

compressex.decompress([
    { 'aabx aabx': '14,26,40' },
    'c',
    { 'fd fu': '17' },
    'y',
    { 'tfd f': '12' },
    'gs',
    { 'fd ff': '5' },
    'd f'
  ]);
// aabx aabxcfd faabx aabxuytaabx aabxfd fgaabx aabxsfd ffd fuftfd ffd ffd f
```

* If a user has a text that he wants to encrypt for a secure transmission over any medium, he could use the encode() function present inside the compressex package to transform it into a secure string which is nothing but a sequence of numbers, and can transform it back to retrive the original text from the encoded sequence by using the decode() function from this package. Please note the user could use the encode() function multiple times to achieve a greater level of security but in that case he has to use the decode() function that many times to retrive back the original text.

### Example ###

```
compressex.encode('Hello World');
// 01213221131222122214115111151721121222212

compressex.decode('01213221131222122214115111151721121222212');
// Hello World
```

* If the user has a text that he wants to transform to binary format he can use the text2Binary() function inside the compressex package to achieve this operation, similarly he can use the binary2Text() function to perform the reverse operation.

### Example ###

```
compressex.text2Binary('Hello World');
// 10010001100101110110011011001101111010000010101111101111111001011011001100100

compressex.binary2Text('10010001100101110110011011001101111010000010101111101111111001011011001100100');
// Hello World
```

## Installation ##

Just run the following command with npm to install compressex locally inside the project directory :

```
npm install compressex
```

Just run the following command with npm to install compressex globally :

```
npm install -g compressex
```

## Notes ##

You can use the object-sizeof npm package to get the size of the objects, to check the size of the inputs & compressed outputs.
