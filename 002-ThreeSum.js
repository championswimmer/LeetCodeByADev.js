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
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    let results = []
    
    var sortedTwoSum = function(nums, target) {
    let sts = []    
    for (let i = 0; i < nums.length; i++) {
        let j = nums.indexOf(target - nums[i], i+1)
        if (j != -1) sts.push([nums[i], nums[j]])
    }
    return sts
}
    
    let pos = []
    let neg = []
    let z = 0
    nums.forEach(n => {
        if (n < 0) neg.push(n)
        if (n > 0) pos.push(n)
        if (n == 0) { z++ }
    })
    pos.sort((a,b) => a-b)
    neg.sort((a,b) => b-a)
    
    if (z >= 3) {
        results.push([0,0,0])
    }
    
    if (z >= 1) {
        let p = 0
        let n = 0 
        while (p < pos.length && n < neg.length) {
            console.log('pos[p] -neg[n]  ' + pos[p] + '  ' +  -neg[n])
            if (pos[p] == -neg[n]) {
                results.push([neg[n], 0, pos[p]])
                p++ 
                n++
                continue
            }
            
            if (pos[p] < -neg[n]) p++
            else n++
        }
    }

    pos.forEach(p => {
        let r = sortedTwoSum(neg, -p)
        if (r != 0) { 
            r.forEach(s => {
                results.push([s[0], s[1], p])
            })
         }
    })

    neg.forEach(n => {
        let r = sortedTwoSum(pos, -n)
        if (r != 0) { 
            r.forEach(s=> {
                results.push([n, s[0], s[1]])
            })
         }
    })

    
    results = results.map(r => r.join(','))
    results = [...new Set(results)]

    return results.map(r => r.split(','))
    
};
console.log(threeSum([3,-10,0,6,8,-5,-6,-1,-7,6,-9]))

