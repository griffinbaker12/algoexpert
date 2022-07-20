// Feel free to add new properties and methods to the class.
class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMax = [];
  }

  peek() {
    // Write your code here.
    return this.stack.at(-1);
  }

  pop() {
    // Write your code here.
    this.minMax.pop();
    return this.stack.pop();
  }

  push(number) {
    // Write your code here.
    const newMinMax = { min: number, max: number };
    if (this.minMax.length) {
      const lastMinMax = this.minMax.at(-1);
      newMinMax.min = Math.min(lastMinMax.min, newMinMax.min);
      newMinMax.max = Math.max(lastMinMax.max, newMinMax.max);
    }
    this.minMax.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    // Write your code here.
    return this.minMax.at(-1).min;
  }

  getMax() {
    // Write your code here.
    return this.minMax.at(-1).max;
  }
}

// Do not edit the line below.
exports.MinMaxStack = MinMaxStack;
