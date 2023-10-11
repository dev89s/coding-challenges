function bisect_search(L, e) {
  if (L.length == 0)
    return false;
  else
    return helper(L, e, 0, L.length - 1);
}

function helper(L, e, low, high) {
  if (high == low)
    return L[low] == e;
  mid = (low + high) / 2;
  if (L[mid] == e)
    return true;
  else if (L[mid] > 0)
    if (low == mid)
      return false;
    else
      return helper(L, e, low, mid - 1);
  else
    return helper(L, e, mid + 1, high);
}
let L = [4, 12, 33, 1, 6, 0, 345, 32, 2, 43, 9];

console.log(bisect_search(L, 12));
