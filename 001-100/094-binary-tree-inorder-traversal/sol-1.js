/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) {
    return []
  }

  var result = []
  result = result.concat(inorderTraversal(root.left))
  result.push(root.val)
  result = result.concat(inorderTraversal(root.right))
  return result
}
