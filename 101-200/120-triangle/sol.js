/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    let prev = []
    let result = triangle[0]

    for (let i = 1; i < triangle.length; i++) {
        prev = result
        result = []
        const row = triangle[i]

        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || (j < i && prev[j - 1] > prev[j])) {
                result.push(prev[j] + row[j])
            } else {
                result.push(prev[j - 1] + row[j])
            }
        }
    }

    return Math.min(...result)
}
