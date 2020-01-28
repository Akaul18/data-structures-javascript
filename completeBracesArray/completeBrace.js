class checkCompletedBraces {
  constructor() {
    this.stack = [];
    this.isBalanced = true;
    this.braces = {
      '{': '}',
      '(': ')',
      '[': ']'
    };
  }
  checkBalanced = str => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] == '{' || str[i] == '[' || str[i] == '(') {
        this.stack.push(str[i]);
      } else if (str[i] == '}' || str[i] == ']' || str[i] == ')') {
        // console.log(str[i]);
        if (this.stack != null && str[i] == this.braces[this.peek()]) {
          this.stack.pop();
        } else {
          this.isBalanced = false;
          break;
        }
      }
    }
    // this.printStack();
  };

  printStack = () => {
    this.stack.forEach(item => {
      console.log(item);
    });
  };

  peek = () => {
    return this.stack[this.stack.length - 1];
  };
}

let str = '{{abcd}(657[])[]}';
let str2 = '{[][}]';
let obj1 = new checkCompletedBraces();

obj1.checkBalanced(str);
if (obj1.isBalanced && obj1.stack.length == 0) console.log('Balanced');
else console.log('Not balanced');

obj1.checkBalanced(str2);
if (obj1.isBalanced && obj1.stack.length == 0) console.log('Balanced');
else console.log('Not balanced');
