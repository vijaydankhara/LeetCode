/*
Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

An integer m is a divisor of n if there exists an integer k such that n = k * m.

 

Example 1:

Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.
Example 2:

Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.
 

Constraints:

1 <= n <= 104
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
    let count =0;
    for(let i=1; i<=n; i++)
    {
        if(n % i === 0)
        {
            count ++;
             
        }
        
    }
  return  count === 3;
};

// console.log(isThree(1)); false
// console.log(isThree(4)); true
// console.log(isThree(6)); false
// console.log(isThree(9)); true
// console.log(isThree(15)); false
// console.log(isThree(25)); true
// console.log(isThree(49)); true
// console.log(isThree(16)); false