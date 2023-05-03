// Abstract Factory
class GUIFactory {
  createButton() {}
  createCheckbox() {}
}

// Concrete Factory 1
class WinFactory extends GUIFactory {
  createButton() {
    return new WinButton();
  }
  createCheckbox() {
    return new WinCheckbox();
  }
}

// Concrete Factory 2
class MacFactory extends GUIFactory {
  createButton() {
    return new MacButton();
  }
  createCheckbox() {
    return new MacCheckbox();
  }
}

// Abstract Product 1
class Button {
  paint() {}
}

// Abstract Product 2
class Checkbox {
  paint() {}
}

// Concrete Product 1 - WinButton
class WinButton extends Button {
  paint() {
    console.log("Render a button in a Windows style");
  }
}

// Concrete Product 2 - WinCheckbox
class WinCheckbox extends Checkbox {
  paint() {
    console.log("Render a checkbox in a Windows style");
  }
}

// Concrete Product 3 - MacButton
class MacButton extends Button {
  paint() {
    console.log("Render a button in a MacOS style");
  }
}

// Concrete Product 4 - MacCheckbox
class MacCheckbox extends Checkbox {
  paint() {
    console.log("Render a checkbox in a MacOS style");
  }
}

// Client Code
class Application {
  constructor(factory) {
    this.factory = factory;
    this.button = null;
    this.checkbox = null;
  }

  createUI() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  paint() {
    this.button.paint();
    this.checkbox.paint();
  }
}

// Usage
const app1 = new Application(new WinFactory());
app1.createUI();
app1.paint();

const app2 = new Application(new MacFactory());
app2.createUI();
app2.paint();
