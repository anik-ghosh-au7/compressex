const { text2Binary, binary2Text } = require('./convert');

module.exports.encode = (input_data) => {
    let data = text2Binary(input_data);
    let result = '';
    let count = 1;

    if (data[0] === '1') {
        result += '0';
    };
    for (let i=0; i<data.length-1; i++) {
        if (data[i] === data[i+1]) {
            count++;
        } else {
            result += count;
            count = 1;
        };
    };
    result += count;
    return result;
};

module.exports.decode = (input_data) => {
    let result = '';
    for (let i=0; i<input_data.length; i++) {
        count = Number(input_data[i]);
        if (i % 2 === 0) {
            result += ('0'.repeat(count));
        } else {
            result += ('1'.repeat(count));
        };
    };
    return binary2Text(result);
};