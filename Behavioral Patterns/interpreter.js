class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }

  get input() {
    return this._input;
  }

  set input(input) {
    this._input = input;
  }

  get output() {
    return this._output;
  }

  set output(output) {
    this._output = output;
  }
}

class AbstractExpression {
  interpret(context) { }

  static isOperator(symbol) {
    return symbol === '+' || symbol === '-' || symbol === '*' || symbol === '/';
  }

  static createExpression(symbol) {
    switch (symbol) {
      case '+':
        return new NonterminalExpressionPlus();
      case '-':
        return new NonterminalExpressionMinus();
      case '*':
        return new NonterminalExpressionMultiply();
      case '/':
        return new NonterminalExpressionDivide();
      default:
        return new TerminalExpressionNumber(parseFloat(symbol));
    }
  }
}

class TerminalExpressionNumber extends AbstractExpression {
  constructor(number) {
    super();
    this.number = number;
  }

  interpret(context) {
    context.output = this.number;
  }
}

class NonterminalExpressionPlus extends AbstractExpression {
  interpret(context) {
    const right = context.input.pop();
    const left = context.input.pop();
    const result = left.output + right.output;
    context.output = result;
  }
}

class NonterminalExpressionMinus extends AbstractExpression {
  interpret(context) {
    const right = context.input.pop();
    const left = context.input.pop();
    const result = left.output - right.output;
    context.output = result;
  }
}

class NonterminalExpressionMultiply extends AbstractExpression {
  interpret(context) {
    const right = context.input.pop();
    const left = context.input.pop();
    const result = left.output * right.output;
    context.output = result;
  }
}

class NonterminalExpressionDivide extends AbstractExpression {
  interpret(context) {
    const right = context.input.pop();
    const left = context.input.pop();
    const result = left.output / right.output;
    context.output = result;
  }
}

class Client {
  constructor(expressionString) {
    this.expressionString = expressionString;
  }

  run() {
    const stack = [];
    const expressionArray = this.expressionString.split(' ');
    for (const symbol of expressionArray) {
      if (AbstractExpression.isOperator(symbol)) {
        const right = stack.pop();
        const left = stack.pop();
        const expression = AbstractExpression.createExpression(symbol);
        expression.left = left;
        expression.right = right;
        stack.push(expression);
      } else {
        const expression = AbstractExpression.createExpression(symbol);
        stack.push(expression);
      }
    }

    const expressionTree = stack.pop();
    const context = new Context();
    expressionTree.interpret(context);
    return context.output;
  }
}

// usage
const expressionString = '3 4 + 5 * 6 -';
const client = new Client(expressionString);
console.log(client.run()); // should output: 29