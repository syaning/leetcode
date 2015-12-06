# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
  lookup = {}
  nums.each_with_index {|x, i|
    if lookup[target - x]
      return [lookup[target - x], i + 1]
    else
      lookup[x] = i + 1
    end
  }
end
