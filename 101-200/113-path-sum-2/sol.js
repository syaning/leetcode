/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  var result = []
  calcSum(root, sum, [], result)
  return result
}

function calcSum(root, sum, nums, result) {
  if (!root) {
    return
  }

  if (root.val === sum && !root.left && !root.right) {
    result.push(nums.concat([root.val]))
  }

  if (root.left) {
    calcSum(root.left, sum - root.val, nums.concat([root.val]), result)
  }

  if (root.right) {
    calcSum(root.right, sum - root.val, nums.concat([root.val]), result)
  }
}
