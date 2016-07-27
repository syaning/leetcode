# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def pathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: List[List[int]]
        """
        result = []
        self.calcSum(root, sum, [], result)
        return result

    def calcSum(self, root, sum, nums, result):
        if not root:
            return
        if root.val == sum and not root.left and not root.right:
            result.append(nums + [root.val])
        if root.left:
            self.calcSum(root.left, sum - root.val, nums + [root.val], result)
        if root.right:
            self.calcSum(root.right, sum - root.val, nums + [root.val], result)
