class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }
    this.tail = newNode;
    // console.log(this.tail);
    this.length++;
  }

  pop() {
    if (!this.length === 0) return undefined;

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;

    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;

      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    if (!this.head) {
      return this.push(val);
    }

    const newHead = new Node(val);

    this.head.prev = newHead;

    newHead.next = this.head;

    this.head = newHead;
    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) return undefined;

    let currentVal;

    if (index < this.length / 2) {
      currentVal = this.head;
      for (let i = 0; i < index; i++) {
        currentVal = currentVal.next;
      }
    } else {
      currentVal = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        currentVal = currentVal.prev;
      }
    }
    return currentVal;
  }
  set(index, val) {
    const currentVal = this.get(index);

    if (!currentVal) return false;

    currentVal.val = val;

    return true;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;
    if (index === 0) return this.unshift(val);

    if (index === this.length) return this.push(val);

    const prevNode = this.get(index - 1);
    const newNode = new Node(val);
    const afterNode = prevNode.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    console.log(this);

    return true;
  }

  remove(index) {
    if (index > this.length || index < 0) return undefined;
    if (index === 0) return this.shift(val);

    if (index === this.length - 1) return this.pop(val);

    const removalNode = this.get(index);

    const afterNode = removalNode.next;
    const prevNode = removalNode.prev;

    prevNode.next = afterNode;
    afterNode.prev = prevNode;

    removalNode.prev = null;
    removalNode.next = null;

    this.length--;
    return removalNode;
  }
}

const linkednList = new DoublyLinkedList();

linkednList.push(10);
// console.log(linkednList.head.prev);
linkednList.push(20);
linkednList.push(40);
// linkednList.push(50);
// console.log(linkednList);
// linkednList.shift();
// linkednList.shift();
linkednList.shift();
linkednList.insert(1, 50);
// console.log(linkednList);
