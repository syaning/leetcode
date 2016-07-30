# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return head
        current = head.next
        head.next = None
        while current:
            nxt = current.next
            current.next = head
            head, current = current, nxt
        return head
