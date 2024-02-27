// 版本号排序
const versionSort = (list) => {
  return list.sort((a, b) => {
    const tempA = a.split(".");
    const tempB = b.split(".");
    for (let i = 0; i < tempA.length; i++) {
      const valueA = Number(tempA[i]);
      const vlaueB = Number(tempB[i]);
      if (valueA === vlaueB) {
        // 当前位 数值相等， 则跳过比较下一位
        continue;
      }
      return vlaueB - valueA;
    }
    return 0;
  });
};

console.log(versionSort(["0.111111.0", "2.1.1", "0.2.3", "1.23.0"]));
