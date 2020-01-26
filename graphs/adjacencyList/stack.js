class Stack {
  constructor() {
    this.stack = [];
  }

  push = item => {
    this.stack.push(item);
  };

  pop = () => {
    if (this.stack.length === 0) return null;
    return this.stack.pop();
  };

  isEmpty = () => {
    if (this.stack.length === 0) return true;
    return false;
  };
}

module.exports = Stack;
