/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a.start - b.start)

  var result = []

  for (let interval of intervals) {
    if (result.length === 0 || result[result.length - 1].end < interval.start) {
      result.push(interval)
    } else {
      result[result.length - 1].end = Math.max(result[result.length - 1].end, interval.end)
    }
  }

  return result
}
