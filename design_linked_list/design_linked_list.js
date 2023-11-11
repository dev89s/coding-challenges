/**
 * @typedef {Object} MyLinkedList
 * @property {ListNode | null} head
 */
var MyLinkedList = function () {
  this.head = null;
};

/**
 * @param {number} val
 * @param {ListNode} next
 */
var ListNode = function (val, next = null) {
  this.val = val;
  this.next = next;
}

/**
* @param {number} index
* @return {number}
*/

MyLinkedList.prototype.get = function (index) {
  let h = this.head;
  let count = 0;
  for (; count < index && h; count++) {
    h = h.next;
  }
  if (!h) {
    return -1;
  }
  return h.val;
};


/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  if (this.head == null) {
    this.head = new ListNode(val);
    return;
  }
  let node = new ListNode(val, this.head);
  this.head = node;
};

/**
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.head == null) {
    this.head = new ListNode(val);
    return;
  }
  let node = new ListNode(val);
  let h = this.head;
  while (h.next) {
    h = h.next;
  }
  h.next = node;
};

/**
* @param {number} index
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let node = new ListNode(val);
  let h = new ListNode(null, this.head);
  let count = 0;
  for (; count < index && h; count++) {
    h = h.next;
  }
  if (!h) {
    return;
  }
  node.next = h.next;
  if (h.next == this.head) {
    this.head = node;
  } else {
    h.next = node;
  }
};


/**
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let h = new ListNode(null, this.head);
  let count = 0;
  for (; count < index; count++) {
    h = h.next;
  }
  if (!h) {
    return;
  }
  if (h.next == this.head) {
    this.head = h.next.next;
    return;
  }
  if (h.next != null) {
    h.next = h.next.next;
  }
};

let arr = [];
let list = arrToList(arr);
console.log(list);
list.addAtHead(1);
list.addAtTail(3);
console.log(listToArray(list));
list.addAtIndex(1, 2);
console.log(listToArray(list));
console.log(list.get(1));
list.deleteAtIndex(1);
console.log(list.get(1));
console.log(listToArray(list));

// ----- Miscellaneous -----
function arrToList(arr) {
  let list = new MyLinkedList();
  if (arr[0] == undefined) {
    return list;
  }
  list.head = new ListNode(arr[0]);
  let h = list.head;
  for (let i = 1; i < arr.length; i++) {
    h.next = new ListNode(arr[i]);
    h = h.next;
  }
  return list;
}

function listToArray(list) {
  let res = [];
  let h = list.head;
  while (h) {
    res.push(h.val);
    h = h.next;
  }
  return res;
}
