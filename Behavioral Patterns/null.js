class Logger {
  log(message) {
    throw new Error('This method must be overwritten!');
  }
}

class ConsoleLogger extends Logger {
  log(message) {
    console.log(message);
  }
}

class NullLogger extends Logger {
  log(message) {
    // Do nothing
  }
}

// Client code
let logger = null;

if (condition) {
  logger = new ConsoleLogger();
} else {
  logger = new NullLogger();
}

logger.log('Hello World!');
