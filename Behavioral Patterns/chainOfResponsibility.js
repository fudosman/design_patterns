// Handler interface
class Handler {
  setNext(handler) { }

  handle(request) { }
}

// Base handler class
class AbstractHandler {
  constructor() {
    this.nextHandler = null;
  }

  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}

// Concrete handler classes
class MonkeyHandler extends AbstractHandler {
  handle(request) {
    if (request === 'Banana') {
      return `Monkey: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

class SquirrelHandler extends AbstractHandler {
  handle(request) {
    if (request === 'Nut') {
      return `Squirrel: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

class DogHandler extends AbstractHandler {
  handle(request) {
    if (request === 'MeatBall') {
      return `Dog: I'll eat the ${request}.`;
    }
    return super.handle(request);
  }
}

// Usage
const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

console.log(monkey.handle('Nut')); // Squirrel: I'll eat the Nut.
console.log(monkey.handle('Banana')); // Monkey: I'll eat the Banana.
console.log(monkey.handle('MeatBall')); // Dog: I'll eat the MeatBall.
