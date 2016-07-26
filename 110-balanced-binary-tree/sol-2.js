/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  var [balanced, depth] = validate(root)
  return balanced
}

function validate(root) {
  if (!root) {
    return [true, 0]
  }

  var [leftBalanced, leftDepth] = validate(root.left)
  if (!leftBalanced) {
    return [false, 0]
  }

  var [rightBalaced, rightDepth] = validate(root.right)
  if (!rightBalaced) {
    return [false, 0]
  }

  return [Math.abs(leftDepth - rightDepth) <= 1, Math.max(leftDepth, rightDepth) + 1]
}
