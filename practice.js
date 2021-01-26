const LinkedList = require("./linkedlist-class");

// findLast: returns the last node in the linked list

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("BoomeStarbuckr");

  findLast(SLL);
}
main();
