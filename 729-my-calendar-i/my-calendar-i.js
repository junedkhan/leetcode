
var MyCalendar = function() {

this.bookings = [];    
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(start, end) {
    let left = 0, right = this.bookings.length;

        // Binary search to find the correct insertion index
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (this.bookings[mid][0] < start) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // Check with previous interval
        if (left > 0 && this.bookings[left - 1][1] > start) {
            return false;
        }

        // Check with next interval
        if (left < this.bookings.length && this.bookings[left][0] < end) {
            return false;
        }

        // No overlap → insert at correct position
        this.bookings.splice(left, 0, [start, end]);
        return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */