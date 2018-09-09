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
var deleteDuplicates = function(head) {
  var dummy = new ListNode()
  dummy.next = head
  var current = dummy

  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      let val = current.next.val
      while (current.next && current.next.val === val) {
        current.next = current.next.next
      }
    } else {
      current = current.next
    }
  }

  return dummy.next
}
