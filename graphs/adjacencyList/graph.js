const Queue = require('./queue');
const Stack = require('./stack');

class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.list = new Map();
  }

  addVertex = v => {
    this.list.set(v, []);
  };

  addEdge = (src, dest) => {
    if (!this.list.has(src) || !this.list.has(dest)) {
      console.log('invalid source or destination');
      return false;
    }
    this.list.get(src).push(dest);
    this.list.get(dest).push(src);
  };

  printGraph = () => {
    let keys = this.list.keys();
    for (let key of keys) {
      let values = this.list.get(key);
      let concatinate = '';
      values.map(value => {
        concatinate += value + ' ';
      });
      console.log(`${key} -> ${concatinate}`);
    }
  };

  bfs = startVertex => {
    let visited = [];
    let q = new Queue();
    visited[startVertex] = true;
    q.enqueue(startVertex);

    while (!q.isEmpty()) {
      let curr = q.dequeue();
      console.log(curr);

      let neighbourList = this.list.get(curr);
      neighbourList.forEach(neighbour => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          q.enqueue(neighbour);
        }
      });
    }
    // console.log(visited.B);
  };

  dfs = startVertex => {
    let visited = [];
    let s = new Stack();
    visited[startVertex] = true;
    s.push(startVertex);

    while (!s.isEmpty()) {
      let curr = s.pop();
      console.log(curr);
      let neighbourList = this.list.get(curr);
      neighbourList.forEach(neighbour => {
        if (!visited[neighbour]) {
          s.push(neighbour);
          visited[neighbour] = true;
        }
      });
    }
  };
}

let graph = new Graph(6);
let vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

vertices.forEach(vertex => {
  graph.addVertex(vertex);
  //   console.log(vertex);
});

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
graph.addEdge('z', 'y');
graph.printGraph();
console.log('BFS');
graph.bfs('B');
console.log('DFS');
graph.dfs('B');
