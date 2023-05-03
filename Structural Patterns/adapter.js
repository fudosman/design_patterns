// Adaptee class
class ElectricSocket {
  plug() {
    console.log("Electric socket is plugged in.");
  }
}

// Target interface
class Device {
  connect() { }
}

// Adapter class
class SocketAdapter extends Device {
  constructor() {
    super();
    this.socket = new ElectricSocket();
  }

  connect() {
    console.log("Adapter converts electric socket to device socket.");
    this.socket.plug();
  }
}

// Client code
class Client {
  constructor(device) {
    this.device = device;
  }

  useDevice() {
    this.device.connect();
  }
}

// Usage example
const electricDevice = new Client(new SocketAdapter());
electricDevice.useDevice(); // Output: Adapter converts electric socket to device socket. Electric socket is plugged in.
