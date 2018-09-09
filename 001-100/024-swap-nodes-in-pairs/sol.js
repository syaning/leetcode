/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  var dummy = new ListNode()
  dummy.next = head
  var current = dummy

  while (current.next && current.next.next) {
    let a = current.next
    let b = current.next.next
    a.next = b.next
    b.next = a
    current.next = b
    current = a
  }

  return dummy.next
}
