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
function inorderTraversal(root) {
  if (!root) {
    return []
  }

  let result = []
  result = result.concat(inorderTraversal(root.left))
  result.push(root.val)
  result = result.concat(inorderTraversal(root.right))
  return result
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function inorderTraversal(root) {
  if (!root) {
    return []
  }

  const result = []
  const stack = []
  let current = root

  while (current || stack.length) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    result.push(current.val)
    current = current.right
  }

  return result
}
