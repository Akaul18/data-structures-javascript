const Node = require('./nodeClass');

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.noOfNodes = 0;
  }

  createNode = data => {
    let node = new Node(data);
    return node;
  };

  insertAtBegining = data => {
    let node = this.createNode(data);
    if (this.getHead() === null) {
      this.head = node;
      //   console.log(this);
    } else {
      node.next = this.getHead();
      this.head.prev = node;
      this.head = node;
      // console.log(this.head);
    }
    this.noOfNodes++;
  };
  insertAtPos = (index, data) => {
    let iterator = 1;
    let curr = this.getHead();
    if (index == 0) {
      this.insertAtBegining(data);
    } else if (index < 0 || index > this.noOfNodes) {
      return 'Invalid index';
    } else if (index == this.noOfNodes) {
      this.insertAtEnd(data);
    } else {
      let node = this.createNode(data);
      while (iterator < index) {
        curr = curr.next;
        iterator++;
      }
      node.next = curr;
      node.prev = curr.prev;
      curr.prev.next = node;
      curr.prev = node;
      this.noOfNodes++;
    }
    // console.log(this.head.next.next);
  };
  insertAtEnd = data => {
    let node = this.createNode(data);
    if (this.getHead() === null) {
      this.head = node;
    } else {
      let curr = this.getHead();
      while (curr.next != null) {
        curr = curr.next;
      }
      curr.next = node;
      node.prev = curr;
    }
    this.noOfNodes++;
  };

  remove = data => {
    if (this.noOfNodes == 0) {
      return 'list is empty';
    } else {
      let curr = this.getHead();
      while (curr.data != data) {
        curr = curr.next;
      }
      curr.prev.next = curr.next;
      console.log(`removed node is: ${curr.data}`);
    }
    this.noOfNodes--;
  };

  removeAtPos = index => {
    let curr = this.getHead();
    if (index == 0) {
      this.head = curr.next;
      console.log(`Removed node is: ${curr.data}`);
    } else if (index < 0 || index > this.noOfNodes) {
      console.log(`Invalid Index`);
    } else if (index == this.noOfNodes) {
      let tail = this.getTail();
      console.log(`removed node is: ${tail.data}`);
      tail.prev.next = null;
      tail = null;
    }
    this.noOfNodes--;
  };

  search = data => {
    let curr = this.getHead();
    while (curr.data != data) {
      curr = curr.next;
      if (curr.next == null) break;
    }
    return curr.data == data ? 'found' : 'not found';
  };

  traverseList = node => {
    console.log(node.data);
    if (node.next != null) {
      return this.traverseList(node.next);
    }
  };
  getHead = () => {
    return this.head;
  };

  getNoOfNodes = () => {
    return this.noOfNodes;
  };

  getTail = () => {
    let tail = this.head;

    while (tail.next != null) {
      tail = tail.next;
    }
    return tail;
  };
}

let dll = new DoublyLinkedList();

dll.insertAtBegining(20);
dll.insertAtBegining(10);
dll.insertAtEnd(30);
dll.insertAtPos(2, 15);
// dll.remove(15);
// dll.removeAtPos(3);
// dll.traverseList(dll.getHead());
// console.log(dll.search(30));
// console.log(dll.getTail());
console.log('No of nodes: ' + dll.getNoOfNodes());
