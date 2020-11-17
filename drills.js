const LinkedList = require("./linkedlist-class");

//=== Creating a singly linked list ===//

// Write a function main. Within the function, using the linked list class above,
// create a linked list with the name SLL and add the following items to your
// linked list: Apollo, Boomer, Helo, Husker, Starbuck.
function main() {
  let SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("BoomeStarbuckr");
  //   console.log(SLL);

  SLL.insertLast("Tauhida");
  // Add Tauhida to the list.

  SLL.remove("Husker");
  // Remove Husker from the list.

  // Implement a function called insertBefore() in the class that inserts a new node before a given node containing a key.
  SLL.insertBefore("Athena", "Boomer");
  // Add Athena before Boomer using your insertBefore() function.
  SLL.insertBefore("Athena", "Boomer");
  // Add Hotdog after Helo using the insertAfter() method.
  SLL.insertAt("Kat", 3);
  // Using the insertAt() method insert Kat in the 3rd position of the list.
  SLL.remove("Tauhida");
  // Remove Tauhida from the list.

  display(SLL);
  size(SLL);
  isEmpty(SLL);
  findPrevious(SLL, 3);
  findLast(SLL);
  reverseList(SLL);
  thirdToLast(SLL);
  middleOfList(SLL);
}
console.log(main());

//=== Supplemental functions for a linked list ===//

// Implement the following functions that operate on your linked list class.
// Note that these should be free functions instead of methods of the linked list class,
// so implement them outside the linked list class. Test each function using the list created in exercise 1.

// display: displays the linked list
function display(llist) {
  let currNode = llist.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

// * size: returns the size of the linked list
function size(llist) {
  let currNode = llist.head;
  let counter = 0;
  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }
  console.log("This list has " + counter + " items");
}

// isEmpty: finds if the list is empty or not (without using the size() function)
function isEmpty(llist) {
  let currNode = llist.head;
  if (currNode === null) {
    console.log("This list is empty");
  } else {
    console.log("This list is not empty");
  }
}

// findPrevious: finds the node before the item you are looking for
function findPrevious(llist, node) {
  let currNode = llist.head;
  let previousNode = llist.head;
  let stepper = 1;

  if (node <= 0) {
    console.log("Node must be greater than 0");
    return;
  }

  while (stepper < node) {
    if (currNode === null) {
      console.log("Boundary error");
      return;
    }
    stepper++;
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (previousNode === null || node === 0) {
    console.log("Item not found");
    return;
  }
  console.log(`The Node before ${node} is: ${previousNode.value}`);
  return;
}

// findLast: returns the last node in the linked list
function findLast(llist) {
  if (llist.head === null) {
    console.log("Linked list does not exist");
    return;
  }
  let currNode = llist.head;
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  console.log(`The last node for this list is: ${currNode.value}`);
  return;
}

//=== Mystery program ===//

// Analyze the following function (without running it in an IDE) to
// determine what problem it is trying to solve. What is the time complexity of this algorithm?

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  // head = beginning of the list
  while (current !== null) {
    // if beginning of list does not equal null, continue
    let newNode = current;
    while (newNode.next !== null) {
      // while next node on list does not equal null
      if (newNode.next.value === current.value) {
        // if the next value equals current value on linked list
        newNode.next = newNode.next.next;
        // delete (skip) the next value
      } else {
        newNode = newNode.next;
        // otherwise return unchanged linked list
      }
    }
    current = current.next;
    //
  }
}
// Answer: This program removes duplicates from a linked list. It will remove the 2nd and
// later occurances of the linked list - will not preserve the order of the list

//=== Reverse a list ===//

// Write an algorithm to reverse a linked list. The time complexity of your algorithm should be
// linear (O(n)). For this exercise, notice we are not asking you just to print the linked list in
// reverse or use another linked list to store the value in reverse order. Your program should reverse
// the direction of a given singly linked list. In other words, all pointers should point backward.
// BONUS: Solve this problem using both recursive and iterative algorithms.

function reverseList(lls) {
  if (!lls.head) {
    return null;
  }

  let currNode = lls.head;
  let prevNode = null;
  let tempNode = currNode;

  while (currNode !== null) {
    tempNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = tempNode;
  }
  lls.head = prevNode;
  return display(lls);
  // make current value = this.head.next
  // make last value = current value
}

//=== 3rd from the end ===//

// Write an algorithm to find the 3rd element from the end of a linked list.
// Note You may be tempted to add a length property to your linked list class.
// The length property is not a typical property of linked list, therefore dont
// make any modification to the linked list class that is provided to you.

function thirdToLast(LL) {
  if (LL.head === null) {
    console.log("List is empty :(");
    return;
  }
  let currNode = LL.head;

  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
  console.log(currNode.value + " is the 3rd from the end!");
  return currNode.value;
}

//=== Middle of a list ===//

// Write an algorithm to find the middle element of a linked list.
// Note You may be tempted to add a length property to your linked list class.
// The length property is not a typical property of linked list, therefore don't make any
// modification to the linked list class that is provided to you. Also, finding the size of the
// linked list using the size() function and dividing it by half will not find the correct middle of the linked list.
// So, don't use either of these approaches.

function middleOfList(list) {
  if (list.head === null) {
    console.log("List is empty");
    return;
  }
  let currNode = list.head;
  let counter = 0;
  while (currNode !== null) {
    currNode = currNode.next;
    counter++;
  }

  let middle = Math.ceil(counter / 2);

  counter = 0;
  currNode = list.head;
  while (counter < middle) {
    counter++;
    currNode = currNode.next;
  }
  console.log(currNode.value + " is in the middle of the list!");
  return currNode;
}

//=== Cycle in a list ===//

// Write an algorithm to find whether a linked list has a cycle
// (i.e., whether a node in the list has its next value pointing to an earlier node in the list).
// For this exercise, create a linked list with the name CycleList. Be sure to insert nodes in the
// list so that it has a cycle. Then test your program with a cycleList function.
const newLinkedList = new LinkedList();
newLinkedList.insertFirst("A");
newLinkedList.insertLast("B");
newLinkedList.insertLast("C");
newLinkedList.insertLast("D");

const newLinkedList2 = new LinkedList();
newLinkedList2.insertFirst("A");
newLinkedList2.insertLast("B");
newLinkedList2.insertLast("C");
newLinkedList2.insertLast("D");

function makeCycle(LL) {
  let currNode = LL.head;

  while (currNode.next !== null) {
    currNode = currNode.next;
    currNode.next = LL.head;
    return LL;
    // Never ending cycle
  }
}

function cycleList(CL) {
  // A B C D
  const listHead = CL.head; // listHead = A
  let currNode = CL.head.next; // currNode = D

  // console.log(listHead.val + ' ' + currNode.val)

  while (currNode.next !== null && currNode.next !== listHead) {
    // console.log(currNode.val + ' ' + currNode.next.val)
    currNode = currNode.next;
    // console.log(currNode.val + ' ' + currNode.next.val)
  }

  if (currNode.next === listHead) {
    console.log("CYCLE!");
    return true;
  } else {
    console.log("No CYCLE!");
    return false;
  }
}

const cycleLinkedList = makeCycle(newLinkedList);

console.log(cycleList(newLinkedList2));
console.log(cycleList(cycleLinkedList));

//=== Sorting a list ===//

// Write an algorithm that will sort a given linked list.
// For example given a list such as 3->2->5->7->1, your program
// will output the sorted version of this list which will be 1->2->3->5->7.
// You may not use another list or any other data structure such as an array to store the data.
function sortList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let temp = null;
  let slow = head;
  let fast = head;

  // merge sort: divide and conqueor- split list into halves and then merge em
  while (fast !== null && fast.next !== null) {
    temp = slow;
    slow = slow.next;
    // traverse's one at a time
    fast = fast.next.next;
    // traverse's two at a time
    // when fast gets to null, slow will be in middle of the list, we can split in half here
  }

  // close first half list
  temp.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);
  return merge(l1, l2);
}
class ListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
// sort in merge method
function merge(l1, l2) {
  const head = new ListNode();
  let current = head;

  while (l1 !== null && l2 !== null) {
    if (l1.value < l2.value) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  current.next = l1 === null ? l2 : l1;

  return head.next;
}

const newLinkedList3 = new LinkedList();
newLinkedList3.insertFirst("1");
newLinkedList3.insertLast("2");
newLinkedList3.insertLast("5");
newLinkedList3.insertLast("10");

console.log(sortList(newLinkedList3.head));
