var MyCalendar = function() {
  this.events = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
  for (let i = 0; i < this.events.length; i++) {
    const [s, e] = this.events[i]
    if (!(start >= e || end <= s)) {
      return false
    }
  }

  this.events.push([start, end])
  return true
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = Object.create(MyCalendar).createNew()
 * var param_1 = obj.book(start,end)
 */
