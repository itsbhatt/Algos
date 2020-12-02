class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stacks {
  constructor() {
    this.head = null;
    this.tail = null;

    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const removalNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      removalNode.next = null;
    }

    this.length--;

    return removalNode;
  }
}
