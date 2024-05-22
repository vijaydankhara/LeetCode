// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true
 

// Constraints:

// -231 <= n <= 231 - 1
 

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    while (n>1)  // n bi 1
   {
       n /= 4
   }
   return n===1
};

console.log(isPowerOfFour(16));    // true
console.log(isPowerOfFour(5));     // false
console.log(isPowerOfFour(1));     // true


// node 14_power4.js