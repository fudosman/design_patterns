class Context {
  constructor(state) {
    this.state = state;
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle();
  }
}

class State {
  handle() { }
}

class ConcreteStateA extends State {
  handle() {
    console.log('ConcreteStateA handles the request.');
  }
}

class ConcreteStateB extends State {
  handle() {
    console.log('ConcreteStateB handles the request.');
  }
}

// usage
const context = new Context(new ConcreteStateA());
context.request(); // output: ConcreteStateA handles the request.
context.setState(new ConcreteStateB());
context.request(); // output: ConcreteStateB handles the request.
