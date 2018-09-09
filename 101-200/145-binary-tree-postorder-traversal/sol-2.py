# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        if not root:
            return []
        result = []
        stack = [root]
        current = None
        while stack:
            top = stack[-1]
            invalidTop = not top.left and not top.right
            isTopChild = current and (
                current is top.left or current is top.right)
            if invalidTop or isTopChild:
                stack.pop()
                result.append(top.val)
                current = top
            else:
                if top.right:
                    stack.append(top.right)
                if top.left:
                    stack.append(top.left)
        return result
