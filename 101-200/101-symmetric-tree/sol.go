/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    return symmetric(root, root)
}

func symmetric(t1 *TreeNode, t2 *TreeNode) bool {
    if t1 == nil && t2 == nil {
        return true
    }
    if t1 == nil || t2 == nil {
        return false
    }
    return t1.Val == t2.Val && symmetric(t1.Left, t2.Right) && symmetric(t1.Right, t2.Left)
}

func isSymmetric(root *TreeNode) bool {
    q := []*TreeNode{root, root}

    for len(q) > 0 {
    	t1, t2 := q[0], q[1]
    	q = q[2:]

    	if t1 == nil && t2 == nil {
    		continue
    	}
    	if t1 == nil || t2 == nil {
    		return false
    	}
    	if t1.Val != t2.Val {
    		return false
    	}

    	q = append(q, []*TreeNode{t1.Left, t2.Right, t1.Right, t2.Left}...)
    }

    return true
}
