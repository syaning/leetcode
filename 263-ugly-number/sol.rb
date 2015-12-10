# @param {Integer} num
# @return {Boolean}
def is_ugly(num)
  return false if num <= 0
  [2, 3, 5].each {|i| num /= i while num % i == 0}
  num == 1
end
