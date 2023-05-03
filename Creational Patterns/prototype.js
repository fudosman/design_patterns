class Prototype {
  constructor() {
    this.property = 'default';
  }

  clone() {
    return Object.create(this);
  }
}

class ConcretePrototype1 extends Prototype {
  constructor() {
    super();
    this.property = 'value1';
  }
}

class ConcretePrototype2 extends Prototype {
  constructor() {
    super();
    this.property = 'value2';
  }
}

const prototype1 = new ConcretePrototype1();
const prototype2 = new ConcretePrototype2();
const clone1 = prototype1.clone();
const clone2 = prototype2.clone();

console.log(clone1.property); // output: "value1"
console.log(clone2.property); // output: "value2"
