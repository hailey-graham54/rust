class LiteHandler {
  constructor(seed = 92) {
    this.state = seed;
  }

  render_builder(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 92) % 997;
    }
    return acc;
  }
}

const obj = new LiteHandler();
console.log(obj.render_builder(92));

module.exports = LiteHandler;
