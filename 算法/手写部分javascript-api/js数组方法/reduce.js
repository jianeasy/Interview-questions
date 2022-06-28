const fn = (arr) => {
    const res = arr.reduce((preValue, currentValue, index, arr) => {
        return preValue + currentValue; //返回值会传给reduce函数下一次执行时的preValue
    })
    return res;
}

let arr = [1, 2, 3, 4, 5]

console.log(fn(arr))