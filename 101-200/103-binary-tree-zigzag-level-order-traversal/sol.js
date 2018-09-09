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
var zigzagLevelOrder = function(root) {
  if (!root) {
    return []
  }

  var current = [root]
  var result = []
  var ltr = true

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

    if (!ltr) {
      vals.reverse()
    }
    ltr = !ltr

    result.push(vals)
    current = next
  }

  return result
}
