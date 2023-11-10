//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
}

// Call the function and run
let arr = [1, 2, 3, 4, 5];
let head = arrToList(arr);
head = reverseList(head);
console.log(listToArray(head));



// --- miscellaneous ---
/**
 * @param {ListNode} head
 * @returns {ListNode}
 */
function listToArray(head) {
  let res = [];
  while (head != null) {
    res.push(head.val);
    head = head.next;
  }
  return res;
}
/**
 * @param {Array<number>} arr
 * @returns {ListNode}
 */
function arrToList(arr) {
  let head = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    let node = new ListNode(arr[i], head);
    head = node;
  }
  return head;
}
