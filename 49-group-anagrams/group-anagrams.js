/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const primes = generateFirstNPrimes(26); // for 'a' to 'z'
    const map = new Map();

    for (const str of strs) {
        let hash = 1n; // use BigInt to avoid overflow

        for (const char of str) {
            hash *= BigInt(primes[char.charCodeAt(0) - 97]);
        }

        const key = hash.toString(); // map keys must be string or primitive

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key).push(str);
    }

    return [...map.values()];
};

function generateFirstNPrimes(n) {
    const primes = [];
    let num = 2;

    while (primes.length < n) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
        num++;
    }

    return primes;
}

