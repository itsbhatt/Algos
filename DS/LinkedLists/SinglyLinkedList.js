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

    let pre = this.head;
    let temp = this.head.next;

    if (!temp) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return pre;
    }
    while (temp.next !== null) {
      //   console.log(temp, 'cfgh');
      //   const nextEl = temp;
      pre = temp;
      temp = temp.next;
    }

    pre.next = null;

    this.tail = pre;

    // console.log({ temp });
    // console.log({ pre });
    // if (secondLast) {
    //   secondLast.next = null;
    // }
    // this.tail = secondLast;

    this.length -= 1;

    return temp;
  }
}

const list = new SinglyLinkedList();

// list.push('hi');
// list.push('there');
// list.push('!');
// list.pop();
// list.pop();
// list.pop();
// console.log(list);

// // const a = {
// //   head: { val: 4, next: { val: 4, next: { val: 4, next: null } } },
// //   tail: { val: 4, next: null },
// // };

// const a = { val: 4, next: 5 };
// const b = a;
// let c = a;

// const d = { val: 25, next: 12 };

// c.next = d;
// c = d;

// const e = { val: 23, next: 4232 };

// c.next = e;
// c = e;

// c.next = null;
// console.log('====================================');
// console.log(a);
// console.log(b);
// console.log(c);
// // console.log(JSON.stringify(a));
// // console.log(JSON.stringify(b));
// // console.log(JSON.stringify(c));
// console.log('====================================');
