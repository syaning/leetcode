# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        balanced, _ = self.validate(root)
        return balanced

    def validate(self, root):
        if not root:
            return True, 0
        balanced, leftDepth = self.validate(root.left)
        if not balanced:
            return False, 0
        balanced, rightDepth = self.validate(root.right)
        if not balanced:
            return False, 0
        return abs(leftDepth - rightDepth) <= 1, max(leftDepth, rightDepth) + 1
