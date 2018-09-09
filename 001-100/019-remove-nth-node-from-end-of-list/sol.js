/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var temp = new ListNode()
  temp.next = head

  var slow = temp
  var fast = temp

  for (let i = 0; i < n; i++) {
    fast = fast.next
  }

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next
  return temp.next
}
