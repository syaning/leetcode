/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  var dummy = new ListNode()
  dummy.next = head
  var tail = dummy

  for (let i = 1; i < m; i++) {
    tail = tail.next
  }

  var revHead = tail.next
  for (let i = m; i < n; i++) {
    let temp = revHead.next
    revHead.next = temp.next
    temp.next = tail.next
    tail.next = temp
  }

  return dummy.next
}
