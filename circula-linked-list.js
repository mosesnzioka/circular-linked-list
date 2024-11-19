class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class CircularLinkedList {
    constructor() {
      this.head = null;
    }
  
   
    add(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
       
        this.head = newNode;
        newNode.next = this.head;
      } else {
        let temp = this.head;
  
       
        while (temp.next !== this.head) {
          temp = temp.next;
        }
  
        
        temp.next = newNode;
        newNode.next = this.head;
      }
    }
  
   
    display() {
      if (!this.head) {
        console.log("The list is empty");
        return;
      }
  
      let temp = this.head;
      let result = [];
  
      do {
        result.push(temp.data);
        temp = temp.next;
      } while (temp !== this.head);
  
      console.log("Circular Linked List:", result.join(" -> "));
    }
  
   
    delete(data) {
      if (!this.head) {
        console.log("The list is empty, nothing to delete.");
        return;
      }
  
      let current = this.head;
      let prev = null;
  
      
      if (current.data === data) {
        if (current.next === this.head) {

          this.head = null;
        } else {
          
          let temp = this.head;
          while (temp.next !== this.head) {
            temp = temp.next;
          }
          temp.next = this.head.next;
          this.head = this.head.next;
        }
        console.log(`${data} deleted from the list.`);
        return;
      }
  
      
      do {
        prev = current;
        current = current.next;
  
        if (current.data === data) {
          prev.next = current.next; 
          console.log(`${data} deleted from the list.`);
          return;
        }
      } while (current !== this.head);
  
      console.log(`${data} not found in the list.`);
    }
  }
  
  
  const list = new CircularLinkedList();
  
  list.add(10);
  list.add(20);
  list.add(30);
  list.add(40);
  
  list.display(); 
  
  list.delete(20); 
  list.display();
  
  list.delete(10);
  list.display(); 
  
  list.delete(50);
  