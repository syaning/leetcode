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
	if root == nil {
		return root
	}
	if root.Left != nil {
		root.Left.Next = root.Right
	}
	if root.Right != nil && root.Next != nil {
		root.Right.Next = root.Next.Left
	}
	connect(root.Left)
	connect(root.Right)
	return root
}
