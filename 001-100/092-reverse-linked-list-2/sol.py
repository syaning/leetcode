# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def reverseBetween(self, head, m, n):
        """
        :type head: ListNode
        :type m: int
        :type n: int
        :rtype: ListNode
        """
        tail = dummy = ListNode(None)
        dummy.next = head

        for i in range(1, m):
            tail = tail.next

        revHead = tail.next
        for i in range(m, n):
            temp = revHead.next
            revHead.next = temp.next
            temp.next = tail.next
            tail.next = temp

        return dummy.next
