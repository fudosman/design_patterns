class Component {
  operation() { }
}

class ConcreteComponent extends Component {
  operation() {
    return "ConcreteComponent";
  }
}

class Decorator extends Component {
  constructor(component) {
    super();
    this._component = component;
  }

  operation() {
    return this._component.operation();
  }
}

class ConcreteDecorator extends Decorator {
  constructor(component) {
    super(component);
  }

  operation() {
    return `ConcreteDecorator(${this._component.operation()})`;
  }
}

const component = new ConcreteComponent();
const decorator = new ConcreteDecorator(component);

console.log(decorator.operation()); // outputs "ConcreteDecorator(ConcreteComponent)"
