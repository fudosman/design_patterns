// Implementor interface
class Device {
  constructor() {
    if (new.target === Device) {
      throw new TypeError("Cannot construct abstract instances directly");
    }
  }

  isEnabled() { }
  enable() { }
  disable() { }
  getVolume() { }
  setVolume(percent) { }
  getChannel() { }
  setChannel(channel) { }
}

// Concrete Implementor 1
class TV extends Device {
  constructor() {
    super();
    this.enabled = false;
    this.volume = 50;
    this.channel = 1;
  }

  isEnabled() {
    return this.enabled;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(percent) {
    this.volume = percent;
  }

  getChannel() {
    return this.channel;
  }

  setChannel(channel) {
    this.channel = channel;
  }
}

// Concrete Implementor 2
class Radio extends Device {
  constructor() {
    super();
    this.enabled = false;
    this.volume = 50;
    this.channel = 1;
  }

  isEnabled() {
    return this.enabled;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(percent) {
    this.volume = percent;
  }

  getChannel() {
    return this.channel;
  }

  setChannel(channel) {
    this.channel = channel;
  }
}

// Abstraction interface
class Remote {
  constructor(device) {
    if (new.target === Remote) {
      throw new TypeError("Cannot construct abstract instances directly");
    }
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp() {
    const volume = this.device.getVolume();
    this.device.setVolume(volume + 10);
  }

  volumeDown() {
    const volume = this.device.getVolume();
    this.device.setVolume(volume - 10);
  }

  channelUp() {
    const channel = this.device.getChannel();
    this.device.setChannel(channel + 1);
  }

  channelDown() {
    const channel = this.device.getChannel();
    this.device.setChannel(channel - 1);
  }
}

// Refined Abstraction 1
class TVRemote extends Remote {
  constructor(device) {
    super(device);
  }

  mute() {
    this.device.setVolume(0);
  }
}

// Refined Abstraction 2
class RadioRemote extends Remote {
  constructor(device) {
    super(device);
  }
}

// Usage example
const tv = new TV();
const tvRemote = new TVRemote(tv);
tvRemote.togglePower(); // turn on the TV
tvRemote.volumeUp(); // increase volume
tvRemote.channelUp(); // increase channel
tvRemote.mute(); // mute the TV
