# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def zigzagLevelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        if not root:
            return []
        current, result = [root], []
        ltr = True
        while current:
            vals, nxt = [], []
            for node in reversed(current):
                vals.append(node.val)
                if ltr:
                    if node.left:
                        nxt.append(node.left)
                    if node.right:
                        nxt.append(node.right)
                else:
                    if node.right:
                        nxt.append(node.right)
                    if node.left:
                        nxt.append(node.left)
            ltr = not ltr
            result.append(vals)
            current = nxt
        return result
