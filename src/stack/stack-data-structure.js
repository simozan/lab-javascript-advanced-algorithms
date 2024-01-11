class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() { if (this.stackControl.length<this.MAX_SIZE) {return true} else {return false}
    // ... your code goes here
  }

  isEmpty() { if (this.stackControl.length===0) {return true} else {return false}
    // ... your code goes here
  }

  push(item) { if (this.canPush()===true) {
    this.stackControl.push(item);
    return (this.stackControl)}
    else throw new Error('STACK_OVERFLOW');
  }

  pop() { if (this.stackControl.length===0){ throw new Error("STACK_UNDERFLOW")}
  else {
    // ... your code goes here
    const elementPop= (this.stackControl[this.stackControl.length-1])
    this.stackControl.pop();
    return elementPop}
  }

  display() {
    // ... your code goes here
    return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
