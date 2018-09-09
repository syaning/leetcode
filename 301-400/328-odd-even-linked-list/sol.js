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
var oddEvenList = function(head) {
	if (!head) {
		return head;
	}

	var lastOdd = head;
	var current = head.next;
	var firstEven;

	while (current && current.next) {
		firstEven = lastOdd.next;
		lastOdd.next = current.next;
		lastOdd = lastOdd.next;
		current.next = lastOdd.next;
		lastOdd.next = firstEven;
		current = current.next;
	}
	
	return head;
};