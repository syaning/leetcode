/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	function valid(nums) {
		nums = nums.filter(x => x !== '.');
		return new Set(nums).size === nums.length;
	}

	var i, jnums;

	for (i = 0; i < 9; i++) {
		if (!valid(board[i])) {
			return false;
		}
	}

	for (i = 0; i < 9; i++) {
		nums = [];
		for (j = 0; j < 9; j++) {
			nums.push(board[j][i]);
		}
		if (!valid(nums)) {
			return false;
		}
	}

	for (i = 0; i < 3; i++) {
		for (j = 0; j < 3; j++) {
			nums = board[j * 3].slice(i * 3, i * 3 + 3)
				.concat(board[j * 3 + 1].slice(i * 3, i * 3 + 3))
				.concat(board[j * 3 + 2].slice(i * 3, i * 3 + 3));
			if (!valid(nums)) {
				return false;
			}
		}
	}

	return true;
};