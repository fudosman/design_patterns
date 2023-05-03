class Command {
  execute() { }
}

class ConcreteCommand extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver.action();
  }
}

class Receiver {
  action() {
    console.log("Receiver is doing some action.");
  }
}

class Invoker {
  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }
}

// usage
const receiver = new Receiver();
const command = new ConcreteCommand(receiver);
const invoker = new Invoker();

invoker.setCommand(command);
invoker.executeCommand();



// example 2

// Receiver
class Light {
  constructor() {
    this.isOn = false;
  }

  on() {
    this.isOn = true;
    console.log('Light is on');
  }

  off() {
    this.isOn = false;
    console.log('Light is off');
  }
}

// Command interface
class Command {
  execute() { }
  undo() { }
}

// Concrete command
class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}

// Concrete command
class LightOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}

// Invoker
class RemoteControl {
  constructor() {
    this.commands = [];
  }

  setCommand(command) {
    this.commands.push(command);
  }

  pressButton() {
    const command = this.commands.pop();
    command.execute();
  }

  undo() {
    const command = this.commands.pop();
    command.undo();
  }
}

// Usage
const light = new Light();
const lightOnCommand = new LightOnCommand(light);
const lightOffCommand = new LightOffCommand(light);

const remoteControl = new RemoteControl();
remoteControl.setCommand(lightOnCommand);
remoteControl.pressButton(); // output: 'Light is on'

remoteControl.setCommand(lightOffCommand);
remoteControl.pressButton(); // output: 'Light is off'

remoteControl.undo(); // output: 'Light is on'
