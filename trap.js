// 接雨水
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let sum = 0
    for (let i = 1; i < height.length - 1; i++) {

        let left = 0;
        for (let j = 0; j < i; j++) {
            left = height[j] > left ? height[j] : left
        }
        let right = 0;
        for (let k = i + 1; k < height.length; k++) {
            right = height[k] > right ? height[k] : right
        }
        if (height[i] >= left || height[i] >= right) {
            sum += 0
        } else {
            let top = right > left ? left : right;
            sum += top - height[i]
            console.log(i, ' ', sum, ' ', height[i], ' ',left, right, );
        }
    }
    return sum

};
const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
const sum = trap(arr)
console.log(sum);