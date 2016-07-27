/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  var ltHead = new ListNode()
  var geHead = new ListNode()
  var lt = ltHead
  var ge = geHead

  while (head) {
    if (head.val < x) {
      lt.next = head
      lt = lt.next
    } else {
      ge.next = head
      ge = ge.next
    }
    head = head.next
  }

  ge.next = null
  lt.next = geHead.next
  return ltHead.next
}
