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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (!root) {
    return false
  }

  if (root.left && root.right) {
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
  }

  if (root.left) {
    return hasPathSum(root.left, sum - root.val)
  }

  if (root.right) {
    return hasPathSum(root.right, sum - root.val)
  }

  return root.val === sum
}
