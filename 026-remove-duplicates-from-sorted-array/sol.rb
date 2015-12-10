# @param {Integer[]} nums
# @return {Integer}
def remove_duplicates(nums)
  return nums.size if nums.size < 2
  prev = 0
  nums[1..-1].each_with_index do |num, i|
    if nums[prev] != num
      prev += 1
      nums[prev] = num
    end
  end
  prev + 1
end
