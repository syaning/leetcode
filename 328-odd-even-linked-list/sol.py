# Definition for singly-linked list.
class ListNode(object):

    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):

    def oddEvenList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return head

        last_odd, current = head, head.next
        while current and current.next:
            first_even = last_odd.next
            last_odd.next = current.next
            last_odd = last_odd.next
            current.next = last_odd.next
            last_odd.next = first_even
            current = current.next
        return head
