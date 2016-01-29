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
var deleteDuplicates = function(head) {
	if (!head) {
		return head;
	}

	var prev = head;
	var current = prev;

	while (current.next) {
		if (current.next.val !== prev.val) {
			prev = prev.next = current.next;
		}
		current = current.next;
	}

	prev.next = null;

	return head;
};