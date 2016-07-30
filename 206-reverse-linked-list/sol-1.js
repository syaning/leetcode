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
var reverseList = function(head) {
  if (!head) {
    return head
  }

  var current = head.next
  head.next = null

  while (current) {
    let next = current.next
    current.next = head
    head = current
    current = next
  }

  return head
}
