const arrFlat = (arr) => {
    let res = []
    arr.forEach((item) => {
        if(Array.isArray(item)){
            res = res.concat(arrFlat(item));
        } else{
            res.push(item)
        }
    });
    return res
}
const arr = [1, [2, [3, 4]]];

console.log(arrFlat(arr));