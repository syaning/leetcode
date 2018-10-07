/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const s1 = []
  const s2 = []
  while (l1) {
    s1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    s2.push(l2.val)
    l2 = l2.next
  }

  let val = 0
  let head = null

  while (s1.length || s2.length) {
    if (s1.length) {
      val += s1.pop()
    }
    if (s2.length) {
      val += s2.pop()
    }
    let node = new ListNode(val % 10)
    node.next = head
    head = node
    val = (val / 10) >> 0
  }

  if (val) {
    let node = new ListNode(val)
    node.next = head
    head = node
  }

  return head
}
