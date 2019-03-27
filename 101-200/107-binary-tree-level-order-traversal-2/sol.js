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
function levelOrderBottom(root) {
  if (!root) {
    return []
  }

  const result = []
  let current = [root]

  while (current.length) {
    let vals = []
    let next = []

    current.forEach(node => {
      vals.push(node.val)
      if (node.left) {
        next.push(node.left)
      }
      if (node.right) {
        next.push(node.right)
      }
    })

    result.unshift(vals)
    current = next
  }

  return result
}
