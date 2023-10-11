/**
 *
 * @param {number} n - the number to be checked for happy number
 * @returns {boolean} - if the number is a happy number or not
 */

const happyNumber = (n) => {
  let res = 0;
  let num = n;
  let found = true;
  let series = new Set();
  do {
    res = 0;
    while (num > 0) {
      res += Math.pow((num % 10), 2);
      num = Math.floor(num / 10);
    }
    num = res;
    console.log(res);
    if (series.has(res)) {
      found = false;
      break;
    }
    series.add(res);
  } while (res != 1);

  return found
}

console.log(happyNumber(4));
