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
    var carry = 0
    var head
    var current
    head = current = new ListNode(null)

    while (l1 || l2) {
        var sum = carry

        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }

        carry = (sum / 10) >> 0
        current.next = new ListNode(sum % 10)
        current = current.next
    }

    if (carry) {
        current.next = new ListNode(carry)
    }

    return head.next
}