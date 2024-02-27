function twoSum(nums, target){
    let res = []
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
      
        const n = target - nums[i]

        if (map.has(n)) {
            return [i, map.get(n)]
        }
        map.set(nums[i], i)

    }

    return res
};

console.log(twoSum([3,2,4]
    , 6));