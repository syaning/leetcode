/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func buildTree(inorder []int, postorder []int) *TreeNode {
	if len(postorder) == 0 {
		return nil
	}

	root := &TreeNode{Val: postorder[len(postorder)-1]}

	idx := 0
	for i, val := range inorder {
		if val == root.Val {
			idx = i
			break
		}
	}

	root.Left = buildTree(inorder[0:idx], postorder[0:idx])
	root.Right = buildTree(inorder[idx+1:], postorder[idx:len(postorder)-1])

	return root
}
