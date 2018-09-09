/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !k) {
        return head
    }

    var current = head
    var size = 1

    while (current.next) {
        current = current.next
        size++
    }

    if (!(k = k % size)) {
        return head
    }

    var fast = head
    var slow = head

    for (let i = 0; i < k; i++) {
        fast = fast.next
    }

    while (fast.next) {
        fast = fast.next
        slow = slow.next
    }

    fast.next = head
    head = slow.next
    slow.next = null

    return head
}
