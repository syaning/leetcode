# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
  temp, temp.next = ListNode.new(nil), head
  slow = fast = temp
  n.times{fast = fast.next}
  slow, fast = slow.next, fast.next while fast.next
  slow.next = slow.next.next
  temp.next
end
