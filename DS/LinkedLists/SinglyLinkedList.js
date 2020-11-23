class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;

    return this;
  }

  pop() {
    if (!this.head) return undefined;

    if (!this.head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return null;
    }

    let temp = this.head;
    let newTail = temp;

    while (temp.next) {
      newTail = temp;
      temp = temp.next;
    }

    newTail.next = null;

    this.tail = newTail;

    this.length -= 1;

    return temp;
  }

  shift() {
    if (!this.head) return undefined;

    const prevHead = this.head;

    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length -= 1;

    return prevHead;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.tail = newNode;
    }

    newNode.next = this.head;

    this.head = newNode;

    this.length += 1;

    return this;
  }

  get(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }

    let pos = 0;
    let curr = this.head;

    while (pos !== index) {
      curr = curr.next;
      pos++;
    }

    return curr;
  }
  set(index, val) {
    let curr = this.get(index);

    if (curr) {
      curr.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index > this.length || index < 0) return false;

    if (index === this.length) return !!this.push(val);

    if (index === 0) return !!this.unshift(val);

    const leftSide = this.get(index - 1);

    const newNode = new Node(val);

    newNode.next = leftSide.next;

    leftSide.next = newNode;

    this.length++;

    return true;
  }

  delete(index) {
    if (index >= this.length || index < 0) return false;

    if (index === this.length - 1) return !!this.pop(index);

    if (index === 0) return !!this.shift(index);

    const leftSide = this.get(index - 1);

    const removalNode = leftSide.next;

    leftSide.next = removalNode.next;

    this.length--;

    return true;
  }

  reverse() {
    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    console.log(this.head);

    let next;
    let prev = null;

    const ab = [];

    for (let i = 0; i < 5; i++) {
      next = node.next;
      if (i == this.length - 1) {
        console.log(node);
      }
      node.next = prev;

      prev = node;
      node = next;
    }
  }
  print() {
    const values = [];

    let node = this.head;
    while (node) {
      values.push(node.val);

      node = node.next;
    }

    console.log(values);
  }
}

const list = new SinglyLinkedList();

list.push('a');
list.push('b');
list.push('c');
list.push('d');
list.push('e');
list.print();
list.reverse();
list.print();

// console.log(list);
