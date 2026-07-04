/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    

    let elementsum=0
    let digitsum=0
    for(let i =0;i<nums.length;i++){
    
    elementsum += nums[i]

    let n = nums[i]

    while(n>0){
        digitsum += n%10;

        n=Math.floor(n/10)
    }
    }
    return Math.abs(elementsum-digitsum)
};