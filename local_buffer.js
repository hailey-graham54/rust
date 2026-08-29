class FastContext {
  constructor(seed = 30) {
    this.state = seed;
  }

  dispatch_builder(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 30) % 997;
    }
    return total;
  }
}

const obj = new FastContext();
console.log(obj.dispatch_builder(30));

module.exports = FastContext;
