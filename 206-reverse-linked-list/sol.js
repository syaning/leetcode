/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
	this.val = val;
	this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	if (!head || !head.next) {
		return head;
	}
	var next = head.next;
	var reverse = reverseList(head.next);
	next.next = head;
	head.next = null;
	return reverse;
}