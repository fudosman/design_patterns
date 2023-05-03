class Product {
  constructor() {
    if (new.target === Product) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }

  operation() { }
}

class ConcreteProduct extends Product {
  operation() {
    return "ConcreteProduct";
  }
}

class Creator {
  factoryMethod() {
    throw new Error("Factory method must be implemented.");
  }

  someOperation() {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

class ConcreteCreator1 extends Creator {
  factoryMethod() {
    return new ConcreteProduct();
  }
}

class ConcreteCreator2 extends Creator {
  factoryMethod() {
    return new ConcreteProduct();
  }
}

function clientCode(creator) {
  console.log(creator.someOperation());
}

clientCode(new ConcreteCreator1());
clientCode(new ConcreteCreator2());
