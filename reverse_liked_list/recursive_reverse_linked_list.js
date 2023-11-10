
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
  let firstHead = head;
  return reverse(head, firstHead);
};
var reverse = function (head, firstHead) {
  if (head == null) {
    return null;
  }
  if (head.next == null && head == firstHead) {
    return head;
  }
  if (head.next == null) {
    return ({prevNode: head, newHead: head});
  }
  let {prevNode, newHead} = reverse(head.next, firstHead);

  prevNode.next = head;
  if (head == firstHead) {
    head.next = null;
    return newHead;
  }
  return ({prevNode: head, newHead: newHead});
}


let arr = [1];
head = arrToList(arr)
console.log(head);
newHead = reverseList(head);
console.log(listToArray(newHead));


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
