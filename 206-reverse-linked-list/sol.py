# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head is None or head.next is None:
            return head
        next = head.next
        reverse = self.reverseList(head.next)
        next.next = head
        head.next = None
        return reverse

# or

class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        temp = ListNode(None)
        while head:
            temp.next, head.next, head = head, temp.next, head.next
        return temp.next
