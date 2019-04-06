"""
# Definition for a Node.
class Node(object):
    def __init__(self, val, left, right, next):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""


class Solution(object):

    def connect(self, root):
        """
        :type root: Node
        :rtype: Node
        """
        parent = None
        leftMost = root
        node = None

        while leftMost:
            parent = leftMost
            leftMost = None
            node = None

            while parent:
                if not leftMost:
                    leftMost = parent.left
                if not leftMost:
                    leftMost = parent.right

                if parent.left:
                    if node:
                        node.next = parent.left
                    node = parent.left
                if parent.right:
                    if node:
                        node.next = parent.right
                    node = parent.right

                parent = parent.next

        return root
