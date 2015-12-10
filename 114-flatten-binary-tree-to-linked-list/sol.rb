# Definition for a binary tree node.
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

# @param {TreeNode} root
# @return {Void} Do not return anything, modify root in-place instead.
def flatten(root)
  return if not root
  flatten(root.right)
  return if not root.left
  flatten(root.left)
  last = root.left
  last = last.right while last.right
  root.left, root.right, last.right = nil, root.left, root.right
end
