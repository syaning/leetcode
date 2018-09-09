/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) {
    return []
  }

  var current = [root]
  var result = []

  while (current.length) {
    let vals = []
    let next = []

    for (let node of current) {
      vals.push(node.val)
      if (node.left) {
        next.push(node.left)
      }
      if (node.right) {
        next.push(node.right)
      }
    }

    result.push(vals)
    current = next
  }

  return result
}
