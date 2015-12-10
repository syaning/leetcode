# @param {String} a
# @param {String} b
# @return {String}
def add_binary(a, b)
  a = a.chars.map{|ch| ch.to_i}.reverse
  b = b.chars.map{|ch| ch.to_i}.reverse
  result, carry = [], 0
  size = a.size > b.size ? a.size : b.size
  for i in 0...size
    val = (a[i] || 0) + (b[i] || 0) + carry
    result << val % 2
    carry = val / 2
  end
  result << carry if carry > 0
  result.reverse.join
end
