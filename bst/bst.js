const Node = require('./nodeClass');

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /////////////////insertion
  insert(data) {
    let newNode = new Node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (newNode.value > node.value) {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  }

  /////////////////removal
  remove(data) {
    // console.log(this.removeNode(this.root, data));
    this.root = this.removeNode(this.root, data);
    return this.root;
  }

  removeNode(node, key) {
    if (node === null) {
      //   console.log('Tree is empty');
      return null;
    } else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      //this is the case when node.value === to key
      // now we check if the node has left child, right child or no child
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      } else {
        let replacingValue = this.findMinNode(node.right);
        node.value = replacingValue.value;

        //after changing the node value remove the last node
        node.right = this.removeNode(node.right, replacingValue.value);
        // console.log(this.findMinNode(node.right));
        // return false;
        return node;
      }
    }
  }

  //   /////////search

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else if (node === data) {
      return node;
    } else {
      return null;
    }
  }

  //////////////////traversal
  preOrder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }

  getRootNode() {
    return this.root;
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }
  findMaxNode(node) {
    if (node.right === null) {
      return node;
    } else {
      return this.findMaxNode(node.right);
    }
  }
}

let bst = new BinarySearchTree();

bst.insert(7);
bst.insert(5);
bst.insert(3);
bst.insert(4);
bst.insert(1);
bst.insert(2);
bst.insert(10);
bst.insert(12);
bst.insert(9);
bst.insert(8);
bst.insert(11);

// console.log('preOrder traversal\n');
// bst.preOrder(bst.getRootNode());
// console.log('inOrder traversal\n');
// bst.inOrder(bst.getRootNode());
// console.log('postOrder traversal\n');
// bst.postOrder(bst.getRootNode());

// console.log('Smallest node\n');
// console.log(bst.findMinNode(bst.getRootNode()));

// console.log('Largest node\n');
// console.log(bst.findMaxNode(bst.getRootNode()));

// console.log(bst.getRootNode());
// console.log(bst.remove(1).left);
console.log(bst.search(bst.getRootNode(), 13));
