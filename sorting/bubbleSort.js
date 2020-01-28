const bubbleSort = function(arr) {
  this.arr = arr;
  this.swapped = false;

  this.sort = function() {
    for (let i = 0; i < this.arr.length - 1; i++) {
      for (let j = 0; j < this.arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          this.swap = true;
        }
      }
      if (!this.swap) break;
    }
    this.display();
  };
  this.display = function() {
    this.arr.forEach(element => {
      console.log(element);
    });
  };
};

let bubble = new bubbleSort([100, -2, 10, 9, 8, 7, 24, 4, 55, 34, 1, 2]);
bubble.sort();
