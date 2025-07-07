
var MyCalendar = function() {

this.bookings = [];    
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    for (let [s, e] of this.bookings) {
            if (Math.max(s, start) < Math.min(e, end)) {
                return false; // overlap
            }
        }

        this.bookings.push([start, end]);
        return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */