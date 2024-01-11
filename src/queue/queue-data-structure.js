class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    if (this.queueControl.length<this.MAX_SIZE){return true} else return false
    // ... your code goes here
  }

  isEmpty() {
    if (this.queueControl.length===0){return true} else return false
    // ... your code goes here
  }

  enqueue(item) {
    if (this.canEnqueue()===true)
    {this.queueControl.push(item)
    return this.queueControl}
    else throw new Error('QUEUE_OVERFLOW');
  }

  dequeue() {
    // ... your code goes here
    if (this.isEmpty()===false){ const elementEliminated= this.queueControl[0]
      this.queueControl.shift()
      return elementEliminated
    } else throw new Error('QUEUE_UNDERFLOW')
  }

  display() {
    // ... your code goes here 
    return (this.queueControl)
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
