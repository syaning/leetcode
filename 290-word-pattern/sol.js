/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var keys = pattern.split('');
    var vals = str.split(' ');

    if (keys.length !== vals.length) {
        return false;
    }

    var kv = {};
    var vk = {};

    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var v = vals[i];

        if (!kv[k] && !vk[v]) {
            kv[k] = v;
            vk[v] = k;
        } else if (!kv[k] || !vk[v]) {
            return false;
        }
    }

    return true;
};