/**
 * @param {number[]} nums1 - First array (the one that includes the empty '0' cells)
 * @param {number} m - length of the first array (actual numbers in the array)
 * @param {number[]} nums2 - Second array
 * @param {number} n - length of the second array
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  while (i < n) {
    while (j < m + n) {
      if (j >= m && nums1[j] == 0) {
        nums1[j] = nums2[i];
        i++;
        break;
      }
      if (nums1[j] > nums2[i]) {
        nums1.splice(j, 0, nums2[i]);
        nums1.pop();
        i++
        break;
      }
      j++;
    }
  }
  nums1.sort();
};


const num1 = [-1,3,0,0,0,0,0];
const num2 = [0,0,1,2,3];


merge(num1, 2, num2, 5);
console.log(num1);
