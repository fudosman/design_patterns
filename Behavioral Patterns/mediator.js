class Mediator {
  constructor() {
    this.colleague1 = null;
    this.colleague2 = null;
  }

  setColleague1(colleague1) {
    this.colleague1 = colleague1;
  }

  setColleague2(colleague2) {
    this.colleague2 = colleague2;
  }

  send(message, sender) {
    if (sender === this.colleague1) {
      this.colleague2.notify(message);
    } else {
      this.colleague1.notify(message);
    }
  }
}

class Colleague {
  constructor(mediator) {
    this.mediator = mediator;
  }

  send(message) {
    this.mediator.send(message, this);
  }

  notify(message) {
    console.log(`${this.constructor.name} received message: ${message}`);
  }
}

class ConcreteColleague1 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }
}

class ConcreteColleague2 extends Colleague {
  constructor(mediator) {
    super(mediator);
  }
}

// Usage
const mediator = new Mediator();

const colleague1 = new ConcreteColleague1(mediator);
const colleague2 = new ConcreteColleague2(mediator);

mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);

colleague1.send('Hello from colleague1');
colleague2.send('Hello from colleague2');



// Example 2

// class Mediator {
//   notify(sender, event) { }
// }

// class ConcreteMediator extends Mediator {
//   constructor() {
//     super();
//     this.colleague1 = new ConcreteColleague1(this);
//     this.colleague2 = new ConcreteColleague2(this);
//   }

//   notify(sender, event) {
//     if (event === 'A') {
//       console.log('Mediator reacts on A and triggers following operations:');
//       this.colleague2.doC();
//     }

//     if (event === 'D') {
//       console.log('Mediator reacts on D and triggers following operations:');
//       this.colleague1.doB();
//       this.colleague2.doC();
//     }
//   }
// }

// class Colleague {
//   constructor(mediator) {
//     this.mediator = mediator;
//   }
// }

// class ConcreteColleague1 extends Colleague {
//   constructor(mediator) {
//     super(mediator);
//   }

//   send(event) {
//     this.mediator.notify(this, event);
//   }

//   doA() {
//     console.log('Colleague1 does A.');
//     this.send('B');
//   }

//   doB() {
//     console.log('Colleague1 does B.');
//   }
// }

// class ConcreteColleague2 extends Colleague {
//   constructor(mediator) {
//     super(mediator);
//   }

//   send(event) {
//     this.mediator.notify(this, event);
//   }

//   doC() {
//     console.log('Colleague2 does C.');
//     this.send('D');
//   }

  doD() {
    console.log('Colleague2 does D.');
  }
}

// usage
const mediator = new ConcreteMediator();
mediator.colleague1.doA();
