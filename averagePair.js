/**
 Multiple Pointers - averagePair
 Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

 Bonus Constraints:
 Time: O(N)
 Space: 0(1)

 Sample Input:
 averagePair ([1,2,3],2.5) // true
 averagePair ([1,3,3,5,6,7,10,12,19],8) // true
 averagePair ([-1,0,3,4,5,6], 4.1) // false
 averagePair([],4) // false
 **/

function averagePair(array,average){
    let left = 0
    let right = array.length-1

    if (array.length === 0 ) return false

    while (left < right) {
        if ( (array[left]+array[right]) /2 > average){
            right --
        }else if ((array[left]+array[right]) /2 < average){
            left ++
        }else return true
    }
    return false
}
