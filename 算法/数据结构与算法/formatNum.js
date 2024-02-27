// 格式化一个数字,为一个数字每三位添加','
const formatNum = (num) => {
  const s = num.toString().split("").reverse();
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (i >= 1 && i % 3 == 0) {
      res.push(",");
    }
    res.push(s[i]);
  }
  return res.reverse().join("");
};

console.log(formatNum(1232231556788445));
