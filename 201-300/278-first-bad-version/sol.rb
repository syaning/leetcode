# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n
# @return {Integer}
def first_bad_version(n)
  left, right = 1, n
  while left < right do
    mid = (left + right) / 2
    is_bad_version(mid) ? (right = mid) : (left = mid + 1)
  end
  left
end
