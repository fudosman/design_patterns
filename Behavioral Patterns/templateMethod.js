class DataParser {
  parseData() {
    this.readData();
    this.parseHeader();
    this.parseBody();
    this.parseFooter();
  }

  readData() {
    console.log('Reading data from source');
  }

  parseHeader() {
    console.log('Parsing header data');
  }

  parseBody() {
    console.log('Parsing body data');
  }

  parseFooter() {
    console.log('Parsing footer data');
  }
}

class XmlParser extends DataParser {
  parseHeader() {
    console.log('Parsing XML header data');
  }

  parseBody() {
    console.log('Parsing XML body data');
  }

  parseFooter() {
    console.log('Parsing XML footer data');
  }
}

class CsvParser extends DataParser {
  parseHeader() {
    console.log('Parsing CSV header data');
  }

  parseBody() {
    console.log('Parsing CSV body data');
  }

  parseFooter() {
    console.log('Parsing CSV footer data');
  }
}

// Usage
const xmlParser = new XmlParser();
xmlParser.parseData(); // Output: Reading data from source, Parsing XML header data, Parsing XML body data, Parsing XML footer data

const csvParser = new CsvParser();
csvParser.parseData(); // Output: Reading data from source, Parsing CSV header data, Parsing CSV body data, Parsing CSV footer data
