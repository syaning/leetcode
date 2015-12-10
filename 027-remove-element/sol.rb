# @param {Integer[]} nums
# @param {Integer} val
# @return {Integer}
def remove_element(nums, val)
  cleared = 0
  nums.each_with_index do |n, i|
    if n != val
      nums[cleared] = n
      cleared += 1
    end
  end
  cleared
end
