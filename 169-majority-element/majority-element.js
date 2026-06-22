/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let count ={}

    for(let i =0; i<nums.length; i++){

        let num =nums[i];

        if(count[num]){
            count[num]++;
        }
        else{
            count[num]=1
        }

    }

    let majority=Math.floor(nums.length/2);

    for(let key in count){

        if(count[key]>majority){
            return Number(key)
        }
    }
};