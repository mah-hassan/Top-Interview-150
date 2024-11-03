/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let count = 0;
   for(const num of nums) {
        if(count < 2 || num !== nums[count - 2]) {
            nums[count] = num;
            count++;
        }
    }
    return count;
};

const nums = [0,0,1,1,1,2,2,3,3,3,3,3,4, 5,5,5];

console.log(removeDuplicates(nums)); // Output: 11