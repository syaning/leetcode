/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var result = 0
    var left = 0
    var right = height.length - 1

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        result = Math.max(result, area)

        if (height[left] < height[right]) {
            let i = left
            while (i < right && height[i] <= height[left]) {
                i++
            }
            left = i
        } else {
            let i = right
            while (i > left && height[i] <= height[right]) {
                i--
            }
            right = i
        }
    }

    return result
}