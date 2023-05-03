class Component {
  constructor(name) {
    this.name = name;
  }

  add(component) {
    throw new Error("Not implemented");
  }

  remove(component) {
    throw new Error("Not implemented");
  }

  getChild(index) {
    throw new Error("Not implemented");
  }

  operation() {
    throw new Error("Not implemented");
  }
}

class Composite extends Component {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    this.children.splice(index, 1);
  }

  getChild(index) {
    return this.children[index];
  }

  operation() {
    console.log(`Composite ${this.name}:`);
    for (const child of this.children) {
      child.operation();
    }
  }
}

class Leaf extends Component {
  constructor(name) {
    super(name);
  }

  operation() {
    console.log(`Leaf ${this.name}`);
  }
}

// Usage example
const root = new Composite("root");
const branch1 = new Composite("branch1");
const branch2 = new Composite("branch2");
const leaf1 = new Leaf("leaf1");
const leaf2 = new Leaf("leaf2");
const leaf3 = new Leaf("leaf3");

root.add(branch1);
root.add(branch2);
branch1.add(leaf1);
branch2.add(leaf2);
branch2.add(leaf3);

root.operation(); // prints the tree hierarchy
