# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None


class Solution(object):

    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        head = current = ListNode(None)
        carry = 0

        while l1 is not None or l2 is not None:
            sum = carry

            if l1 is not None:
                sum += l1.val
                l1 = l1.next
            if l2 is not None:
                sum += l2.val
                l2 = l2.next

            carry = sum // 10
            current.next = ListNode(sum % 10)
            current = current.next

        if carry:
            current.next = ListNode(carry)

        return head.next
