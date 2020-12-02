class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  dequeue() {
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
