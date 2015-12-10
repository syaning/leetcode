# @param {String} s
# @return {Integer}
def length_of_last_word(s)
    s.split.last ? s.split.last.length : 0
end