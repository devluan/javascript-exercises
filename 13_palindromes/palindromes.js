const palindromes = function (string) {
    const cleanString = string.replace(/[^\w]/g, '').toLowerCase();
    return cleanString == cleanString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
