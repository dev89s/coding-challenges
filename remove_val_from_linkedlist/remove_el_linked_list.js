/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let firstHead = head;
  while (firstHead.val == val && firstHead != null) {
    firstHead = firstHead.next;
  }
  head = firstHead;
  let prev = head;
  while (head != null) {
    if (head.val == val) {
      head = head.next;
      if (head != null) {
        prev.next = head;
      } else {
        prev.next = null;
        break;
      }
    } else {
      prev = head;
      head = head.next;
    }
  }
  return firstHead;
}

// - code to run and test

let arr = [1, 2, 3, 4, 5, 3, 6, 7, 3];
let val = 3;
let head = arrToList(arr);
let firstHead = removeElements(head, val);
console.log(listToArray(firstHead));

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

//  Definition for singly-linked list.
/**
 *
 * @param {Number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
