/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const map = answers.reduce((ret, answer) => {
    ret[answer] = (ret[answer] || 0) + 1
    return ret
  }, {})

  return Object.entries(map).reduce((ret, [answer, count]) => {
    answer = Number(answer)
    ret += Math.ceil(count / (answer + 1)) * (answer + 1)
    return ret
  }, 0)
}
