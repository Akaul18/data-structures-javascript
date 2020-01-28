const selection = function(arr) {
  this.arr = arr;

  this.sort = function() {
    let min = 0;
    for (let i = 0; i < this.arr.length - 1; i++) {
      min = i;

      for (let j = i + 1; j < this.arr.length; j++) {
        if (this.arr[j] < this.arr[min]) {
          min = j;
        }
      }
      if (min != i) {
        let temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
      }
    }
    this.display();
  };

  this.display = function() {
    this.arr.forEach((element, i) => {
      console.log(element);
    });
  };
};

let obj1 = new selection([3, 5, 0, 2, 7382, 9, 7]);
obj1.sort();
// obj1.display();
