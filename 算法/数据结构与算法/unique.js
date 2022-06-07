const unique1 = (arr) => {
    const res = arr.filter((item, index, array) => {
        return array.indexOf(item) === index
    })
    return res
}

const unique2 = (arr) => {
    const cache = new Map();
    const res = []
    arr.forEach((item, index) => {
        if(!cache.has(item)){
            res.push(item)
            cache.set(item, index)
        }
    });
    return res
}
const unique3 = (arr)=>{
    return Array.from(new Set(arr))
}
console.log(unique1([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]));
console.log(unique2([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]));
console.log(unique3([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]));


