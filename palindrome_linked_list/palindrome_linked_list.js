/**
 *
 * @param {number} val
 * @param {ListNode} next
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let i = 0;
  while (i < arr.length / 2) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false;
    i++;
  }
  return true;
};

// -- Testing --
let head = arrToList([1, 2, 3, 2, 1, 2, 3, 2, 1]);

console.log(isPalindrome(head));


// -- Miscellaneous --
function arrToList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function listToArr(head) {
  let arr = [];
  let current = head;
  while (current) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

function stack() {
  let arr = [];
  this.push = function (val) {
    arr.push(val);
  }
  this.pop = function () {
    return arr.pop();
  }
  this.peek = function () {
    return arr[arr.length - 1];
  }
  this.isEmpty = function () {
    return arr.length === 0;
  }
}
