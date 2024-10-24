/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Problem Description: https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; 
    let j = n - 1; 
    let k = m + n - 1; // Last position in nums1

    // Merge in reverse order
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};


let nums1 = [4,5,6,0,0,0];
let m = 3;
let nums2 = [1,2,3];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);