function arrayOfArrayProducts(arr) {
  // your code goes here

  let res = [];
  // ex: [8, 10, 2]
  if (arr.length == 1) {
    return res;
  }
  let mult = 1;
  for (let i = 0, j = 0; i < arr.length;) {

    if (j == arr.length) {
      res.push(mult);
      i++;
      j = 0;
      mult = 1;
      continue;
    }
    if ( j != i ) {
      mult *= arr[j];
    }
    j++;
  }

  return res;
}

let arr = [8, 2, 10];
console.log(arrayOfArrayProducts(arr));
