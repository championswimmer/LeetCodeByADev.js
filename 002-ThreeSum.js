/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:

Input: nums = []
Output: []

Example 3:

Input: nums = [0]
Output: []

 

Constraints:

    0 <= nums.length <= 3000
    -10^5 <= nums[i] <= 10^5

*/ 
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    let results = []
    
    var sortedTwoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let j = nums.indexOf(target - nums[i], i+1)
        if (j != -1) return ([nums[i], nums[j]])
    }
    return [0]    
}
    
    let pos = []
    let neg = []
    let z = 0
    nums.forEach(n => {
        if (n < 0) neg.push(n)
        if (n > 0) pos.push(n)
        if (n == 0) { z++ }
    })
    
    if (z == 3) {
        results.push([0,0,0])
    }
    
    if (z == 1) {
        let p = 0
        let n = 0 
        while (p < pos.length && n < neg.length) {
            if (pos[p] == -neg[n]) {
                results.push([neg[n], 0, pos[p]])
                p++ 
                n++
                continue
            }
            
            if (pos[p] > -neg[n]) n++
            else p++
        }
    }

    pos.forEach(p => {
        let r = sortedTwoSum(neg, -p)
        if (r.join() != '0') { results.push([r[0], r[1], p]) }
    })

    neg.forEach(n => {
        let r = sortedTwoSum(pos, -n)
        if (r.join() != '0') { results.push([n, r[0], r[1]]) }
    })



    return results
    
};
