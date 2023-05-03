class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  set strategy(strategy) {
    this._strategy = strategy;
  }

  get strategy() {
    return this._strategy;
  }

  executeStrategy() {
    return this.strategy.execute();
  }
}

class Strategy {
  execute() { }
}

class ConcreteStrategyA extends Strategy {
  execute() {
    return 'Executing strategy A';
  }
}

class ConcreteStrategyB extends Strategy {
  execute() {
    return 'Executing strategy B';
  }
}

// Usage
const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy()); // Output: Executing strategy A

context.strategy = new ConcreteStrategyB();
console.log(context.executeStrategy()); // Output: Executing strategy B
