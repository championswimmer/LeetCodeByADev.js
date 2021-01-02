
/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

 

Example 1:

Input: num = 3
Output: "III"
Example 2:

Input: num = 4
Output: "IV"
Example 3:

Input: num = 9
Output: "IX"
Example 4:

Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

*/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let k = parseInt(num / 1000)
    let h = parseInt((num % 1000) / 100)
    let t = parseInt((num % 100) / 10)
    let o = parseInt(num % 10)

    function romDig(n, i, v, x) {
        if (n == 0) return ''
        if (n == 1) return '' + i
        if (n == 2) return '' + i + i
        if (n == 3) return '' + i + i + i
        if (n == 4) return '' + i + v
        if (n == 5) return '' + v
        if (n == 6) return '' + v + i
        if (n == 7) return '' + v + i + i
        if (n == 8) return '' + v + i + i + i
        if (n == 9) return '' + i + x
    }

    let roman = ''

    for (let i = 0; i < k; i++) {
        roman += 'M'
    }

    roman += romDig(h, 'C', 'D', 'M') + romDig(t, 'X', 'L', 'C') + romDig(o, 'I', 'V', 'X')

    return roman
};

console.log(intToRoman(5234))
