/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.data = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.data.has(key)) return -1;

    const value = this.data.get(key);
    this.data.delete(key);
    this.data.set(key, value);
    return value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(this.data.has(key)) {
        this.data.delete(key);
    }

    this.data.set(key, value);
    if(this.data.size > this.capacity) {
        const OldestKey = this.data.keys().next().value;
        this.data.delete(OldestKey);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */