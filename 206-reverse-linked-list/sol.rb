# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# @param {ListNode} head
# @return {ListNode}
def reverse_list(head)
  return head if not head or not head.next
  nxt, reverse = head.next, reverse_list(head.next)
  nxt.next, head.next = head, nil
  reverse
end
