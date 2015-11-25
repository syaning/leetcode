/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        return check(1, n);

        function check(min, max) {
            if (min === max) {
                return min;
            }

            var mid = (min + max) / 2 >> 0;
            return isBadVersion(mid) ? check(min, mid) : check(mid + 1, max);
        }
    };
};