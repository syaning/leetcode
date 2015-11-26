# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution(object):
    def flatten(self, root):
        """
        :type root: TreeNode
        :rtype: void Do not return anything, modify root in-place instead.
        """
        if root is None:
            return
        self.flatten(root.left)
        self.flatten(root.right)

        if root.left is not None:
            current = root.left
            while current.right is not None:
                current = current.right
            current.right = root.right

        root.right = root.left if root.left is not None else root.right
        root.left = None
