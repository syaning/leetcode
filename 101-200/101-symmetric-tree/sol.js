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
function isSymmetric(root) {
  const symmetric = (left, right) => {
    if (!left && !right) {
      return true
    }
    if (!left || !right) {
      return false
    }
    return left.val === right.val &&
      symmetric(left.left, right.right) &&
      symmetric(left.right, right.left)
  }

  return symmetric(root, root)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isSymmetric(root) {
  const queue = [root, root]

  while (queue.length) {
    const p = queue.shift()
    const q = queue.shift()

    if (!p && !q) {
      continue
    }
    if (!p || !q) {
      return false
    }
    if (p.val !== q.val) {
      return false
    }

    queue.push(p.left, q.right, p.right, q.left)
  }

  return true
}
