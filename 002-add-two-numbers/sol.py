# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        overflow = 0
        head = current = ListNode(0)

        while l1 is not None or l2 is not None:
            sum = overflow
            if l1 is not None:
                sum += l1.val
                l1 = l1.next
            if l2 is not None:
                sum += l2.val
                l2 = l2.next
            overflow, sum = sum // 10, sum % 10
            current.next = ListNode(sum)
            current = current.next

        if overflow > 0:
            current.next = ListNode(overflow)

        return head.next
