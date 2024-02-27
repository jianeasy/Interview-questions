/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  let p1 = 0;
  let p2 = 0;
  let res = [];
  nums1.length = m;
  let index = 0;
  while (p1 < m && p2 < n) {
    if (nums1[p1] <= nums2[p2]) {
      res.push(nums1[p1]);
      p1++;
    } else {
      console.log(p2, nums2[p2]);
      res.push(nums2[p2]);

      p2++;
    }
  }
  // 将剩余的添加到res中
  console.log(p1, p2);
  while (p1 < m) {
    res.push(nums1[p1]);
    p1++;
  }

  while (p2 < n) {
    res.push(nums2[p2]);
    p2++;
  }
  res.forEach((item, i) => {
    nums1[i] = item;
  });
}
let nums1 = [1, 2, 3];
let nums2 = [2, 3, 4, 5];
merge(nums1, nums1.length, nums2, nums2.length);
console.log(nums1);
