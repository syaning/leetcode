# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        return self.symmetric(root, root)

    def symmetric(self, left, right):
        if not left and not right:
            return True
        if not left or not right:
            return False
        return left.val == right.val and self.symmetric(left.left, right.right) and self.symmetric(left.right, right.left)


class Solution(object):

    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        queue = [root, root]

        while queue:
            p, q = queue[0], queue[1]
            queue = queue[2:]

            if not p and not q:
                continue
            if not p or not q:
                return False
            if p.val != q.val:
                return False

            queue += [p.left, q.right, p.right, q.left]

        return True
