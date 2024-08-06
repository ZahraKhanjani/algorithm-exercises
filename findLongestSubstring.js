/**
 Sliding Window - findLongestSubstring
 Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

 findLongestSubstring(*') // 0
 findLongestSubstring('rithmschool') // 7
 findLongestSubstring('thisisawesome') // 6]
 findLongestSubstring('thecatinthehat') // 7
 findLongestSubstring('bbbbbb') // 1
 findLongestSubstring('longestsubstring') // 8|
 findLongestSubstring('thisishowwedoit') // 6

 Time Complexity - O(n)
 **/

function findLongestSubstring(str){
    let charPosition
    let currentString = ''
    let char=''
    let maxLength = 0

    if (str.length <=1) return 0

    for (let i = 0 ; i< str.length; i++){
        char = str.charAt(i)
        charPosition = currentString.indexOf(char)
        if (charPosition !== -1) {
            currentString = currentString.substring(charPosition+1)
        }
        currentString += char
        maxLength = Math.max(maxLength, currentString.length);
    }

    return maxLength
}
