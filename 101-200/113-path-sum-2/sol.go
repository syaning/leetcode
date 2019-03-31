/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func pathSum(root *TreeNode, sum int) [][]int {
	result := [][]int{}
	calcSum(root, sum, []int{}, &result)
	return result
}

func calcSum(root *TreeNode, sum int, nums []int, result *[][]int) {
	if root == nil {
		return
	}

	nums = append(nums, root.Val)

	if root.Val == sum && root.Left == nil && root.Right == nil {
		*result = append(*result, nums)
	}

	if root.Left != nil {
		calcSum(root.Left, sum-root.Val, append([]int{}, nums...), result)
	}

	if root.Right != nil {
		calcSum(root.Right, sum-root.Val, append([]int{}, nums...), result)
	}
}
