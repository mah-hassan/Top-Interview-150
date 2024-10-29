/**
 * @param {string} s
 * @return {boolean}
 */

// with RegX extension
// const isAlphanumericCharacter = function(c) {
//     return /^[a-zA-Z0-9]/.test(c);
// } 
const isAlphanumericCharacter = function(c) {
    return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");    
} 
var isPalindrome = function(s) {
    let right = s.length - 1;
    let left = 0;
    
    while (left < right) {
        while(!isAlphanumericCharacter(s[left]) && left < right)
            left++;
        
        while(!isAlphanumericCharacter(s[right]) && right > left)
            right--;

        if(s[left].toLowerCase() !== s[right].toLowerCase())
            return false;
        
        left++;
        right--;
    }
    return true;
};