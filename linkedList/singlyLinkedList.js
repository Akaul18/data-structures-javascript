const Node = require('./nodeClass');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.noOfNodes = 0;
  }

  insertAtBegining(data) {
    let newNode = new Node(data);

    if (this.getHead() === null) {
      this.head = newNode;
      //   return false;
    } else {
      //   newNode.pointer = this.head.pointer;
      //   this.head.pointer = newNode;
      newNode.pointer = this.head;
      this.head = newNode;
    }
    this.noOfNodes++;
    console.log(this);
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (this.getHead() === null) {
      this.head = newNode;
    } else {
      this.tail = this.head;
      while (this.tail.pointer !== null) {
        this.tail = this.tail.pointer;
      }
      this.tail.pointer = newNode;
    }
    this.noOfNodes++;
  }

  insertAtPosition(pos, data) {
    let newNode = new Node(data);
    if (this.getHead() === null || pos==0) {
      this.head = newNode;
    } else {
      if (pos > 0 && pos > this.count) {
        return 'Invalid position';
      }else
    }
  }

  traverseList(node) {
    while (node) {
      console.log(node.data);
      if (node.pointer !== null) {
        node = node.pointer;
      } else {
        break;
      }
    }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

let sll = new SinglyLinkedList();

console.log(sll.getHead());
sll.insertAtBegining(10);
sll.insertAtBegining(20);
sll.insertAtBegining(30);
sll.insertAtBegining(40);
sll.insertAtBegining(50);
sll.insertAtEnd(5);
sll.traverseList(sll.getHead());
console.log(sll.getTail());
console.log(sll.noOfNodes);
