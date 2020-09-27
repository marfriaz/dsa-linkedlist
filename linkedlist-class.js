"use strict";

class LinkedList {
  constructor() {
    this.head = null;
    // head to indicate the beginning of the list
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
    // Constant Time O(1)
    // Inserting at the beginning of the list can be achieved by the following steps:
    // Create a new node item
    // Point the head to that new node
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
      // Check to see if the list is empty, if it is, then insert the new item as the only item in the list
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
        // Start at the beginning of the list and move through the list until you reach the end of the list
      }
      tempNode.next = new _Node(item, null);
      // Create a new node item
      // Set the end node's next pointer to the new node
      // Linear Time O(n)
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
    // you find the node before the node you are removing and update its next pointer to skip over the removed node
    // best-case performance is O(1),
    // and the average and worst cases are O(n) due to finding the node that you want to remove.
  }
}

module.exports = LinkedList;
