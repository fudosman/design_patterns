class Facade {
  constructor() {
    this.subsystem1 = new Subsystem1();
    this.subsystem2 = new Subsystem2();
  }

  operation() {
    this.subsystem1.operation1();
    this.subsystem2.operation2();
  }
}

class Subsystem1 {
  operation1() {
    console.log('Subsystem1 operation');
  }
}

class Subsystem2 {
  operation2() {
    console.log('Subsystem2 operation');
  }
}

const facade = new Facade();
facade.operation(); // Output: "Subsystem1 operation" followed by "Subsystem2 operation"
