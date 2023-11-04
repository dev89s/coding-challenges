let arr = [0, -1, -2, 2, 1];
let k = 1;

function findPairsWithGivenDifference(arr, k) {
  let res = [];

  let map = new Map();
  arr.forEach(y => map.set(y + k, y));

  map.forEach((y, x) => {
    if (arr.includes(x)) {
      res.push([x, y]);
    }
  });


  return res;
}

console.log(findPairsWithGivenDifference(arr, k));
