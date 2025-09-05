const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    const sequence = [0, 1];
    while (sequence.length <= n) {
        sequence.push(sequence.at(-1) + sequence.at(-2));
    }
    return sequence.at(n);
};

// Do not edit below this line
module.exports = fibonacci;
