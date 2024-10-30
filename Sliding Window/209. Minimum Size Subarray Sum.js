/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 
var minSubArrayLen = function(target, nums) {
    let right = 0;
    let left = 0;
    let minLen = Infinity;
    let sum = 0;

    while (right < nums.length) {
        sum += nums[right];  
        
        
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left];
            left++;
        }
        
        right++;  
    }
    
    return minLen === Infinity ? 0 : minLen;
};

const target = 7;
const nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums)); 
