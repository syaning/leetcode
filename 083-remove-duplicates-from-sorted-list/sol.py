# Definition for singly-linked list.
class ListNode(object):

    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):

    def deleteDuplicates(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head:
            return head

        prev = head
        current = prev

        while current.next:
            if current.next.val != prev.val:
                prev.next = current.next
                prev = prev.next
            current = current.next

        prev.next = None

        return head
