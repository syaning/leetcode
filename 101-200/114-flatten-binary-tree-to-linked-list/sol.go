/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func flatten(root *TreeNode) {
	if root == nil {
		return
	}

	flatten(root.Left)
	flatten(root.Right)

	if root.Left != nil {
		current := root.Left
		for current.Right != nil {
			current = current.Right
		}
		current.Right = root.Right
		root.Right = root.Left
		root.Left = nil
	}
}
