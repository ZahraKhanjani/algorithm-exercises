/**
 Frequency Counter / Multiple Pointers - areThereDuplicates
 Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 Examples:
 areThereDuplicates(1, 2, 3) // false areThereDuplicates(1, 2, 2) // true areThereDuplicates('a', 'b', 'c', 'a') // true

 Restrictions:
 Time - O(n)
 Space - O(n)


 Bonus:
 Time - O(n log n)
 Space - O(1)
 **/

function areThereDuplicates(...arguments) {
    const resultObject = {}
    for (let item of arguments){
        if (resultObject[item]){
            return true
        }
        resultObject[item] = 1
    }
    return false
}

//Bonus Time=> O(nlogn) Space=> O(1)

function refactoredAreThereDuplicate (...arguments) {
    arguments.sort()

    for (let i =0; i< arguments.length;i++){
        if (arguments[i] === arguments[i+1])
            return true
    }
    return false
}

