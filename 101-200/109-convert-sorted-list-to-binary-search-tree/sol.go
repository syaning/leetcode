/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sortedListToBST(head *ListNode) *TreeNode {
	var vals []int
	for head != nil {
		vals = append(vals, head.Val)
		head = head.Next
	}
	return buildTree(vals, 0, len(vals)-1)
}

func buildTree(nums []int, left, right int) *TreeNode {
	if left > right {
		return nil
	}

	sum := left + right
	mid := 0
	if sum%2 == 0 {
		mid = sum / 2
	} else {
		mid = (sum + 1) / 2
	}

	root := &TreeNode{Val: nums[mid]}
	root.Left = buildTree(nums, left, mid-1)
	root.Right = buildTree(nums, mid+1, right)

	return root
}
