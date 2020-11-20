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
}

const list = new SinglyLinkedList();

list.push('hi');
list.push('there');
list.push('!');
// list.pop();
// list.pop();
// list.pop();
list.shift();
list.shift();
list.shift();
console.log(list);
