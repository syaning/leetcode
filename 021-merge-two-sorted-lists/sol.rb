# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
    temp = head = ListNode.new(nil)
    while l1 && l2 do
        if l1.val > l2.val
            temp.next = l2
            l2 = l2.next
        else
            temp.next = l1
            l1 = l1.next
        end
        temp = temp.next
    end
    temp.next = l1 ? l1 : l2
    head.next
end

# or

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists_2(l1, l2)
    return l1 if not l2
    return l2 if not l1
    l1, l2 = l2, l1 if l1.val > l2.val
    l1.next = merge_two_lists_2(l1.next, l2)
    l1
end