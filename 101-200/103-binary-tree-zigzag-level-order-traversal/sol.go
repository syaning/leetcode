/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func zigzagLevelOrder(root *TreeNode) [][]int {
	if root == nil {
		return [][]int{}
	}

	var result [][]int
	current := []*TreeNode{root}
	ltr := true

	for len(current) > 0 {
		var vals []int
		var next []*TreeNode

		for i := len(current)-1; i >= 0; i--{
			node := current[i]
			vals = append(vals, node.Val)
			if ltr {
				if node.Left != nil {
					next = append(next, node.Left)
				}
				if node.Right != nil {
					next = append(next, node.Right)
				}
			} else {
				if node.Right != nil {
					next = append(next, node.Right)
				}
				if node.Left != nil {
					next = append(next, node.Left)
				}
			}
		}

		ltr = !ltr
		result = append(result, vals)
		current = next
	}

	return result
}
