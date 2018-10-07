/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let l1 = new ListNode()
  let l2 = new ListNode()
  l1.next = l2.next = head

  while (l1 !== l2) {
    if (!l1 || !l2 || !l2.next) {
      return false
    }
    l1 = l1.next
    l2 = l2.next.next
  }

  return true
}
