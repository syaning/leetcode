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
var postorderTraversal = function(root) {
  if (!root) {
    return []
  }

  var result = []
  var stack = [root]
  var current = null

  while (stack.length) {
    let top = stack[stack.length - 1]
    let invalidTop = !top.left && !top.right
    let isTopChild = current && (current === top.left || current === top.right)

    if (invalidTop || isTopChild) {
      stack.pop()
      result.push(top.val)
      current = top
    } else {
      if (top.right) {
        stack.push(top.right)
      }
      if (top.left) {
        stack.push(top.left)
      }
    }
  }

  return result
}
