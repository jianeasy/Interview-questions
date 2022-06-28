// filter函数返回包含所有满足条件的值的数组
const fn = (arr) => {
    const res = arr.filter(item => {
        return item % 2 === 0
    })
    return res;
}

let arr = [1, 2, 3, 4, 5, 6]
console.log(fn(arr));