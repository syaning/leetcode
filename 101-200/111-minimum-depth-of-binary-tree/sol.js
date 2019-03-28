/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  if (!root) {
    return 0
  }

  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right))
  }

  if (root.left) {
    return 1 + minDepth(root.left)
  }

  if (root.right) {
    return 1 + minDepth(root.right)
  }

  return 1
}


/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  if (!root) {
    return 0
  }

  let depth = 1
  let current = [root]

  while (current.length) {
    const next = []

    for (let node of current) {
      if (!node.left && !node.right) {
        return depth
      }
      if (node.left) {
        next.push(node.left)
      }
      if (node.right) {
        next.push(node.right)
      }
    }

    depth += 1
    current = next
  }

  return depth
}
