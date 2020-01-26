class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue = vertex => {
    this.queue.push(vertex);
  };

  dequeue = () => {
    if (this.queue.length === 0) {
      return null;
    } else {
      let shifted = this.peek();
      this.queue.shift();
      return shifted;
    }
  };

  isEmpty = () => {
    if (this.queue.length == 0) return true;
    return false;
  };

  peek = () => {
    if (this.queue.length === 0) {
      return null;
    } else {
      return this.queue[0];
    }
  };

  printQueue = () => {
    this.queue.forEach((item, i) => {
      process.stdout.write(item + ' ');
      if (i == this.queue.length - 1) process.stdout.write('\n');
    });
  };
}
module.exports = Queue;

// let q = new Queue();

// q.enqueue(5);
// q.enqueue(6);
// q.enqueue(7);
// q.enqueue(8);
// q.enqueue(9);
// q.enqueue(10);

// q.dequeue();
// q.dequeue();

// console.log(q.peek());

// q.printQueue();
// console.log(q.isEmpty());
