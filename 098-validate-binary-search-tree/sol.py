# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def isValidBST(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return self.isValid(root, -float('inf'), float('inf'))

    def isValid(self, root, low, high):
        if not root:
            return True
        if root.val <= low or root.val >= high:
            return False
        return self.isValid(root.left, low, root.val) and self.isValid(root.right, root.val, high)
