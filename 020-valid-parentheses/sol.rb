# @param {String} s
# @return {Boolean}
def is_valid(s)
  stack, labels = [], {'(' => ')', '[' => ']', '{' => '}'}
  s.chars.each do |c|
    if labels.has_key? c
      stack << c
    elsif stack.length == 0 || labels[stack.pop] != c
      return false
    end
  end
  stack.length == 0
end
