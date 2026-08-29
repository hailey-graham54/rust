class LiteDispatcher {
  constructor(seed = 87) {
    this.state = seed;
  }

  load_handler(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 87) % 997;
    }
    return acc;
  }
}

const obj = new LiteDispatcher();
console.log(obj.load_handler(87));

module.exports = LiteDispatcher;
