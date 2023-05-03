class Product {
  constructor() {
    this.parts = [];
  }

  addPart(part) {
    this.parts.push(part);
  }

  listParts() {
    console.log(`Product parts: ${this.parts.join(', ')}`);
  }
}

class Builder {
  buildPartA() { }
  buildPartB() { }
  buildPartC() { }
}

class ConcreteBuilder extends Builder {
  constructor() {
    super();
    this.product = new Product();
  }

  buildPartA() {
    this.product.addPart('Part A');
  }

  buildPartB() {
    this.product.addPart('Part B');
  }

  buildPartC() {
    this.product.addPart('Part C');
  }

  getProduct() {
    return this.product;
  }
}

class Director {
  constructor(builder) {
    this.builder = builder;
  }

  construct() {
    this.builder.buildPartA();
    this.builder.buildPartB();
    this.builder.buildPartC();
    return this.builder.getProduct();
  }
}

function clientCode() {
  const builder = new ConcreteBuilder();
  const director = new Director(builder);
  const product = director.construct();
  product.listParts();
}

clientCode();
