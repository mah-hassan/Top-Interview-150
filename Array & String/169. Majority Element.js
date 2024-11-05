/**
 * @param {number[]} nums
 * @return {number}
 */
// using a hash map 
var majorityElement2 = function(nums) {

    const map = new Map();
    let majorityElement = nums[0];
    let maxCount = 0;
    for (const num of nums) 
    {
        if(map.has(num))
        {
            const elementCount = map.get(num);
            map.set(num, elementCount + 1);
            
            if(maxCount > elementCount + 1)
            {
                majorityElement = num;
                maxCount = elementCount + 1;
            }
        }
        else
            map.set(num, 1);
    }
    return majorityElement;
}

var majorityElement = function(nums) {
    let count = 0;
    let result = nums[0];
    for(const num of nums)
    {
        if(num === result)
            count++;
        else{
            count--;
            if(count < 0)
            {
                result = num;
                count = 1;
            }
        }
    }
    return result;
};