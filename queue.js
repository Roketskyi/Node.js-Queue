class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; // Вказівник на початок черги
    this.tail = null; // Вказівник на кінець черги
    this.length = 0; // Кількість елементів у черзі
  }

  // Додавання елементу в чергу
  enqueue(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Видалення та повернення першого елементу з черги (FIFO)
  dequeue() {
    if (!this.head) {
      return null; // Черга порожня
    }

    const removedNode = this.head;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;

    return removedNode.data;
  }

  // Повертає кількість елементів у черзі
  size() {
    return this.length;
  }

  // Виводить всі елементи черги
  display() {
    const elements = [];
    let current = this.head;

    while (current) {
      elements.push(current.data);
      current = current.next;
    }

    return elements;
  }
}

// Приклад використання "Черги"
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Елементи черги:", queue.display()); // [1, 2, 3]
console.log("Кількість елементів у черзі:", queue.size()); // 3

const removedElement = queue.dequeue();
console.log("Видалений елемент:", removedElement); // 1
console.log("Елементи черги після видалення:", queue.display()); // [2, 3]
