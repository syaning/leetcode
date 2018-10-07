# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def hasCycle(self, head):
        """
        :type head: ListNode
        :rtype: bool
        """
        l1 = ListNode(None)
        l2 = ListNode(None)
        l1.next = l2.next = head
        while l1 != l2:
            if not l1 or not l2 or not l2.next:
                return False
            l1 = l1.next
            l2 = l2.next.next

        return True
