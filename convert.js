module.exports.text2Binary = (input) => {
    return input.split('').map(char => char.charCodeAt(0).toString(2).padStart(7, 0)).join('');
};

module.exports.binary2Text = (input) => {
    return input.match(/.{7}/g).map(elem => String.fromCharCode(parseInt(elem, 2))).join('');
};