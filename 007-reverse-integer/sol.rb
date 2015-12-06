# @param {Integer} x
# @return {Integer}
def reverse(x)
    return -reverse(-x) if x < 0
    
    val = 0
    while x > 0 do
        val = val * 10 + x % 10
        x = x / 10
    end
    
    val <= 2147483647 ? val : 0
end