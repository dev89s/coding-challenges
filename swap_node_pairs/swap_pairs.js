
//- Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let h = head;
  if (h == null)
    return head;
  let first = h;
  let second = h.next
  if (second != null) {
    let temp = swapPairs(second.next);
    second.next = first;
    first.next = temp;
    return second;
  } else {
    return head;
  }
}
let arr = [1, 2, 3, 4, 5, 6, 7];
let head = null;
for (let i = arr.length - 1; i >= 0; i--) {
  let node = new ListNode(arr[i], head);
  head = node;
}

head = swapPairs(head);
console.log(listToArray(head));


// ----------- miscellaneous ---------
function listToArray(head) {
  const result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}
