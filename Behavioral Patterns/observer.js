class Observer {
  update() { }
}

class Subject {
  constructor() {
    this.observers = [];
  }

  attach(observer) {
    this.observers.push(observer);
  }

  detach(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

// Concrete observer class
class ConcreteObserver extends Observer {
  constructor(name) {
    super();
    this.name = name;
  }

  update() {
    console.log(`${this.name} received an update.`);
  }
}

// usage
const subject = new Subject();
const observer1 = new ConcreteObserver('Observer 1');
const observer2 = new ConcreteObserver('Observer 2');

subject.attach(observer1);
subject.attach(observer2);

subject.notify();

subject.detach(observer1);

subject.notify();
