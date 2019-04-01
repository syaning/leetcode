/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (!root) {
    return root
  }
  if (root.left) {
    root.left.next = root.right
  }
  if (root.right && root.next) {
    root.right.next = root.next.left
  }
  connect(root.left)
  connect(root.right)
  return root
}
