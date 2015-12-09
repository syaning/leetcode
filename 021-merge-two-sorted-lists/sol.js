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
var mergeTwoLists = function(l1, l2) {
    var head = new ListNode();
    var temp = head;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }

    temp.next = l1 ? l1 : l2;
    return head.next;
};

// or

var mergeTwoLists_2 = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    if (l1.val > l2.val) {
        var temp = l1;
        l1 = l2;
        l2 = temp;
    }
    l1.next = mergeTwoLists_2(l1.next, l2);
    return l1;
};