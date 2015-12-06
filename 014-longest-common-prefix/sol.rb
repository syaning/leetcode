# @param {String[]} strs
# @return {String}
def longest_common_prefix(strs)
  return '' unless strs.length > 0

  i, prefix = 0, ''
  while i < strs[0].length do
      prefix = strs[0][0..i]
      strs.each {|str| return prefix[0..-2] if prefix != str[0..i]}
      i += 1
  end
  return prefix
end
