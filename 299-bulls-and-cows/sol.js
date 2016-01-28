/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var a = 0;
    var b = 0;
    var smap = {};
    var gmap = {};

    for (var i = 0; i < secret.length; i++) {
        var s = secret[i];
        var g = guess[i];

        if (s === g) {
            a += 1;
            console.log(s, g, a);
        } else {
            if (smap[g]) {
                smap[g] -= 1;
                b += 1;
            } else {
                gmap[g] = (gmap[g] || 0) + 1;
            }

            if (gmap[s]) {
                gmap[s] -= 1;
                b += 1;
            } else {
                smap[s] = (smap[s] || 0) + 1;
            }
        }
    }

    return [a, 'A', b, 'B'].join('');
};