class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }

  operation(uniqueState) {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}

class FlyweightFactory {
  constructor(initialFlyweights) {
    this.flyweights = {};
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  getKey(state) {
    return JSON.stringify(state);
  }

  getFlyweight(sharedState) {
    const key = this.getKey(sharedState);
    if (!(key in this.flyweights)) {
      console.log("FlyweightFactory: Can't find a flyweight, creating new one.");
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      console.log('FlyweightFactory: Reusing existing flyweight.');
    }

    return this.flyweights[key];
  }

  listFlyweights() {
    const count = Object.keys(this.flyweights).length;
    console.log(`FlyweightFactory: I have ${count} flyweights:`);
    for (const key in this.flyweights) {
      console.log(key);
    }
  }
}

const factory = new FlyweightFactory([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

factory.listFlyweights();

const flyweight1 = factory.getFlyweight([1, 2, 3]);
flyweight1.operation([10, 11, 12]);

const flyweight2 = factory.getFlyweight([4, 5, 6]);
flyweight2.operation([13, 14, 15]);

const flyweight3 = factory.getFlyweight([1, 2, 3]);
flyweight3.operation([16, 17, 18]);

console.log(flyweight1 === flyweight3);
