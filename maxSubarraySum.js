/**
Sliding Window - maxSubarray Sum

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxsubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6, -1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null

Constraints:
Time Complexity - O(N)
Space Complexity - 0(1)
**/

function maxSubarraySum(intArray,num){
    let maxSum = 0
    let tempSum = 0

    if (num > intArray.length) return null

    for (let i= 0;i< num; i++){
        maxSum += intArray[i]
    }
    tempSum = maxSum
    for (let i = num; i< intArray.length; i++){
        tempSum = tempSum - intArray [i-num] + intArray [i]
        if (tempSum > maxSum){
            maxSum = tempSum
        }
    }

    return maxSum
}
