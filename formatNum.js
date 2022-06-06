// 格式化一个数字,为一个数字每三位添加','
const formatNum = (num) => {
    let s = num.toString();
    if (s.length <= 3) {
        return s;
    }
    let res = '';
    let headLen = s.length % 3;
    res = s.substring(0, headLen) + ',';
    let i = headLen;
    while (i < s.length) {
        res += `${s.substring(i, i + 3)},`
        i += 3
    }
    return res.slice(0, res.length - 1);

}

console.log(formatNum(123));