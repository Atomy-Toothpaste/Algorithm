class CircleQueue {
  constructor(size) {
    this.maxQueueSize = size;
    this.array = [];
    this.front = 0;
    this.rear = 0;
  }

  isEmpyt() {
    return this.front == this.rear;
  }

  isFull() {
    return (this.rear + 1) % this.maxQueueSize == this.front;
  }
  enQueue(item) {
    if (this.isFull()) {
      console.log(new Error("큐가 포화상태입니다."));
    } else {
      this.rear = (this.rear + 1) % this.maxQueueSize;
      this.array[this.rear] = item;
    }
  }

  deQueue() {
    if (this.isEmpyt()) {
      console.log(new Error("큐가 비었습니다."));
    } else {
      this.front = (this.front + 1) % this.maxQueueSize;
      return this.array[this.front];
    }
  }

  print() {
    if (this.isEmpyt()) {
      console.log(new Error("큐가 비었습니다."));
    }
    let string = "";
    let i = this.front;
    do {
      i = (i + 1) % this.maxQueueSize;
      string += this.array[i] + "|";
      if (i == this.rear) {
        console.log(string);
        break;
      }
    } while (i != this.front);
  }
}
