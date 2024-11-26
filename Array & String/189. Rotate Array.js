/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const reverse = function(left, right) {
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    };

    k = k % nums.length;
    let l = 0, r = nums.length - 1;
    reverse(l, r);
    // [7,6,5,4,3,2,1]
    l = 0, r = k - 1;
    reverse(l, r);
    // [5,6,7,4,3,2,1]
    l = k, r = nums.length - 1;
    reverse(l, r);
    // [5,6,7,1,2,3,4]
};

const nums = [1,2,3,4,5,6,7];
rotate(nums, 3);

console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
