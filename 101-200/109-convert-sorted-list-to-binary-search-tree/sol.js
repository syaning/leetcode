/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  const vals = []
  while (head) {
    vals.push(head.val)
    head = head.next
  }

  function buildTree(nums, left, right) {
    if (left > right) {
      return null
    }

    const mid = (left + right + 1) / 2 >> 0
    const root = new TreeNode(nums[mid])
    root.left = buildTree(nums, left, mid - 1)
    root.right = buildTree(nums, mid + 1, right)
    return root
  }

  return buildTree(vals, 0, vals.length - 1)
}
