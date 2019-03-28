# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution(object):

    def sortedListToBST(self, head):
        """
        :type head: ListNode
        :rtype: TreeNode
        """
        vals = []
        while head:
            vals.append(head.val)
            head = head.next
        return self.buildTree(vals, 0, len(vals) - 1)

    def buildTree(self, nums, left, right):
        if left > right:
            return None

        mid = (left + right + 1) // 2
        root = TreeNode(nums[mid])
        root.left = self.buildTree(nums, left, mid - 1)
        root.right = self.buildTree(nums, mid + 1, right)
        return root
