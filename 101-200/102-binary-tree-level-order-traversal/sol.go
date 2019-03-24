/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
    if root == nil {
    	return [][]int{}
    }

    result := [][]int{}
    current := []*TreeNode{root}

    for len(current) > 0 {
    	var vals []int
    	var next []*TreeNode

    	for _, node := range current {
    		vals = append(vals, node.Val)
    		if node.Left != nil {
    			next = append(next, node.Left)
    		}
    		if node.Right != nil {
    			next = append(next, node.Right)
    		}
    	}

    	result = append(result, vals)
    	current = next
    }

    return result
}
