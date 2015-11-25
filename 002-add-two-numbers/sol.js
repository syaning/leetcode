/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var overflow = 0,
        head, current, sum;

    head = current = new ListNode();

    while (l1 || l2) {
        sum = overflow;

        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        overflow = (sum / 10) >> 0;
        sum = sum % 10;

        current = current.next = new ListNode(sum);
    }

    if (overflow) {
        current.next = new ListNode(overflow);
    }

    return head.next;
};