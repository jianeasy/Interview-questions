//返回表示数组中是有否满足条件的值的boolean值
const fn = (arr) => {
    const res = arr.some(item => {
        return item % 2 === 0
    })
    return res;
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(fn(arr));