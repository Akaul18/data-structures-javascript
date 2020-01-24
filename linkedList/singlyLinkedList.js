const Node = require('./nodeClass');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.noOfNodes = 0;
  }

  insertAtBegining(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      //   return false;
    } else {
      //   newNode.pointer = this.head.pointer;
      //   this.head.pointer = newNode;
      newNode.pointer = this.head;
      this.head = newNode;
    }
    // console.log(this);
    this.noOfNodes++;
  }

  insertAtPos(index, data) {
    let curr, prev;
    let iterator = 1;
    if (index == 0) {
      this.insertAtBegining(data);
    } else if (index == this.noOfNodes) {
      this.insertAtEnd(data);
    } else {
      let node = new Node(data);
      curr = this.head;
      while (iterator < index) {
        prev = curr;
        curr = curr.pointer;
        iterator++;
      }
      node.pointer = curr;
      prev.pointer = node;
    }
    this.noOfNodes++;
  }

  insertAtEnd(data) {
    let newNode = new Node(data);
    if (this.head === null) {
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

  traverseList(node) {
    // while (node) {
    console.log(node.data);
    if (node.pointer !== null) {
      // node = node.pointer;
      return this.traverseList(node.pointer);
    }
    //   else break;
    // }
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

let sll = new SinglyLinkedList();

sll.insertAtBegining(10);
sll.insertAtBegining(20);
sll.insertAtBegining(30);
sll.insertAtBegining(40);
sll.insertAtBegining(50);
sll.insertAtEnd(5);

sll.insertAtPos(6, 45);
console.log(sll.getTail());
sll.traverseList(sll.getHead());
