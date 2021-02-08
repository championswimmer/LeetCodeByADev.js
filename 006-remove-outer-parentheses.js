/*
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:

Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
*/

/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let L = 0, R = 0;
    let idx = [0]

    for (let i = 0; i < S.length; i++) {
        if (S[i] == '(') L++;
        if (S[i] == ')') R++;
        if (L == R) {
            L = 0; R = 0; 
            idx.push(i+1)
        }
    }
    let print = ''
    for (let i = 1; i <= idx.length; i++) {
        print += S.slice(idx[i-1]+1, idx[i]-1)
    }
    return print
};
