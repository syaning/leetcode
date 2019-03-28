/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isBalanced(root *TreeNode) bool {
	if root == nil {
		return true
	}
	ld := maxDepth(root.Left)
	rd := maxDepth(root.Right)
	return ((ld+1 == rd) || (ld-1 == rd) || ld == rd) &&
		isBalanced(root.Left) &&
		isBalanced(root.Right)
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	ld := maxDepth(root.Left)
	rd := maxDepth(root.Right)

	if ld >= rd {
		return ld + 1
	}
	return rd + 1
}
