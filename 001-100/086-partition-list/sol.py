# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def partition(self, head, x):
        """
        :type head: ListNode
        :type x: int
        :rtype: ListNode
        """
        lt = ltHead = ListNode(None)
        ge = geHead = ListNode(None)

        while head:
            if head.val < x:
                lt.next = head
                lt = lt.next
            else:
                ge.next = head
                ge = ge.next
            head = head.next

        ge.next = None
        lt.next = geHead.next
        return ltHead.next
