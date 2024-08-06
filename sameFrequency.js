/**
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:
Time: O(N)

Sample Input:
sameFrequency (182, 281) // true
sameFrequency (34,14) // false
sameFrequency (3589578, 5879385) // true
sameFrequency (22,222) // false
**/

function sameFrequency(firstInt,secondInt){
    let firstNumber = String(firstInt)
    let secondNumber = String(secondInt)

    if (firstNumber.length !== secondNumber.length) return false

    const numberObject = {}
    for (let i = 0; i<firstNumber.length;i++){
        numberObject[firstNumber[i]] ? numberObject[firstNumber[i]] +=1 : numberObject[firstNumber[i]] = 1
    }

    for (let i = 0; i<secondNumber.length;i++){
        if (numberObject[secondNumber[i]]){
            numberObject[secondNumber[i]] -=1
        } else
            return false
    }

    return true
}
