/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 *     Next *TreeNode
 * }
 */
func connect(root *TreeNode) *TreeNode {
	var parent *TreeNode
	var leftMost = root
	var node *TreeNode

	for leftMost != nil {
		parent = leftMost
		leftMost = nil
		node = nil

		for parent != nil {
			if leftMost != nil {
				leftMost = parent.Left
			}
			if leftMost != nil {
				leftMost = parent.Right
			}
			if parent.Left != nil {
				if node != nil {
					node.Next = parent.Left
				}
				node = parent.Left
			}
			if parent.Right != nil {
				if node != nil {
					node.Next = parent.Right
				}
				node = parent.Right
			}
			parent = parent.Next
		}
	}

	return root
}
