// Element class
class Element {
  accept(visitor) { }
}

// ConcreteElement class
class ConcreteElement extends Element {
  constructor(name) {
    super();
    this.name = name;
  }

  accept(visitor) {
    visitor.visitConcreteElement(this);
  }

  getName() {
    return this.name;
  }
}

// Visitor class
class Visitor {
  visitConcreteElement(concreteElement) { }
}

// ConcreteVisitorA class
class ConcreteVisitorA extends Visitor {
  visitConcreteElement(concreteElement) {
    console.log(`ConcreteVisitorA visited ${concreteElement.getName()}`);
  }
}

// ConcreteVisitorB class
class ConcreteVisitorB extends Visitor {
  visitConcreteElement(concreteElement) {
    console.log(`ConcreteVisitorB visited ${concreteElement.getName()}`);
  }
}

// ObjectStructure class
class ObjectStructure {
  constructor(elements) {
    this.elements = elements;
  }

  accept(visitor) {
    this.elements.forEach((element) => {
      element.accept(visitor);
    });
  }
}

// Usage
const element1 = new ConcreteElement("Element 1");
const element2 = new ConcreteElement("Element 2");
const element3 = new ConcreteElement("Element 3");

const elements = [element1, element2, element3];
const objectStructure = new ObjectStructure(elements);

const visitorA = new ConcreteVisitorA();
const visitorB = new ConcreteVisitorB();

objectStructure.accept(visitorA);
objectStructure.accept(visitorB);
