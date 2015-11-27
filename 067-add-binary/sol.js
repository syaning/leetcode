/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var stra = a.split('').reverse();
    var strb = b.split('').reverse();

    var carry = 0,
        sum = 0,
        result = [],
        i = 0;
    while (i < stra.length || i < strb.length) {
        sum = (+stra[i] || 0) + (+strb[i] || 0) + carry;
        result.push(sum % 2);
        carry = sum / 2 >> 0;
        i++;
    }

    if (carry) {
        result.push(carry);
    }

    return result.reverse().join('');
};