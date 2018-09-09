/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	var sums = [];
	for (var i = 0; i < nums.length; i++) {
		sums[i] = i === 0 ? nums[0] : (sums[i - 1] + nums[i]);
	}
	this.sums = sums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	var sums = this.sums;
	return i === 0 ? sums[j] : (sums[j] - sums[i - 1]);
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */