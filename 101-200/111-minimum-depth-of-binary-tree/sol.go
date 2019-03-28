package main

func main() {

}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	ld := minDepth(root.Left)
	rd := minDepth(root.Right)

	if ld == 0 {
		return 1 + rd
	}
	if rd == 0 {
		return 1 + ld
	}
	if ld > rd {
		return 1 + rd
	}
	return 1 + ld
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func minDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	depth := 1
	current := []*TreeNode{root}

	for len(current) > 0 {
		var next []*TreeNode

		for _, node := range current {
			if node.Left == nil && node.Right == nil {
				return depth
			}
			if node.Left != nil {
				next = append(next, node.Left)
			}
			if node.Right != nil {
				next = append(next, node.Right)
			}
		}

		depth += 1
		current = next
	}

	return depth
}
