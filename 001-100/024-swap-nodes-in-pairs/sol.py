# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def swapPairs(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        dummy = ListNode(None)
        dummy.next = head
        current = dummy
        while current.next and current.next.next:
            a, b = current.next, current.next.next
            a.next = b.next
            b.next = a
            current.next = b
            current = a
        return dummy.next
