/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var labels = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (var ch of s) {
        if (labels.hasOwnProperty(ch)) {
            stack.push(ch);
        } else if (stack.length === 0 || labels[stack.pop()] !== ch) {
            return false;
        }
    }

    return stack.length === 0;
};