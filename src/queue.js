const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (this.head === null) {
      let newOne = { value: value, next: null }
      this.head = newOne;
      this.end = newOne;
    } else {
      let newOne = { value: value, next: null }
      this.end.next = newOne
      this.end = newOne;
    }
  }

  dequeue() {
    let result = this.head.value;
    this.head = this.head.next;
    return result;
  }

}

module.exports = {
  Queue
};
