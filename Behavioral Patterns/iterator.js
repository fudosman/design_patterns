class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() { }

  next() { }
}

class ConcreteIterator extends Iterator {
  constructor(collection) {
    super(collection);
  }

  hasNext() {
    return this.index < this.collection.length;
  }

  next() {
    return this.collection[this.index++];
  }
}

class Aggregate {
  createIterator() { }
}

class ConcreteAggregate extends Aggregate {
  constructor(collection) {
    super();
    this.collection = collection;
  }

  createIterator() {
    return new ConcreteIterator(this.collection);
  }
}

// usage
const collection = [1, 2, 3, 4, 5];
const aggregate = new ConcreteAggregate(collection);
const iterator = aggregate.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.next());
}
