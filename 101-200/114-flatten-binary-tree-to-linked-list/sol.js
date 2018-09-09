/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) {
    return
  }

  flatten(root.left)
  flatten(root.right)

  if (root.left) {
    let current = root.left
    while (current.right) {
      current = current.right
    }
    current.right = root.right
    root.right = root.left
    root.left = null
  }
}
