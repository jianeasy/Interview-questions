// 判断数组中是否每个元素都满足条件

const fn = (arr) => {
    const res = arr.every(item => {
        return item % 2 === 0
    })
    return res;
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(fn(arr));