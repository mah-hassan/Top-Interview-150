/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    if(nums.length <= 1) return nums.length; 
    let right = 1;
    let left = 0;
    while(right < nums.length) {
        if(nums[right] !== nums[left]) {
            nums[left + 1] = nums[right];
            left++;
        }
        right++;
    }
    return left + 1;
};

const nums = [0,0,1,1,1,2,2,3,3,4];

const k = removeDuplicates(nums);
console.log(`${nums} has ${k} Unique Elements` ); // Output: 5, nums should be modified to [0,1,2,3,4]