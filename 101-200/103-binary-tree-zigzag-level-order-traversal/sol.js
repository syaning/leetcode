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
function zigzagLevelOrder(root) {
  if (!root) {
    return []
  }

  const result = []
  let current = [root]
  let ltr = true

  while (current.length) {
    const vals = []
    const next = []

    for (let i = current.length - 1; i >= 0; i--) {
      const node = current[i]
      vals.push(node.val)
      if (ltr) {
        if (node.left) {
          next.push(node.left)
        }
        if (node.right) {
          next.push(node.right)
        }
      } else {
        if (node.right) {
          next.push(node.right)
        }
        if (node.left) {
          next.push(node.left)
        }
      }
    }

    ltr = !ltr
    result.push(vals)
    current = next
  }

  return result
}
