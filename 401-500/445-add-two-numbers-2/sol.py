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
        s1 = []
        s2 = []
        while l1:
            s1.append(l1.val)
            l1 = l1.next
        while l2:
            s2.append(l2.val)
            l2 = l2.next

        val = 0
        head = None

        while s1 or s2:
            if s1:
                val += s1.pop()
            if s2:
                val += s2.pop()
            node = ListNode(val % 10)
            node.next = head
            head = node
            val = val // 10

        if val:
            node = ListNode(val)
            node.next = head
            head = node

        return head
