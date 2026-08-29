class LocalContext {
  constructor(seed = 26) {
    this.state = seed;
  }

  render_builder(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 26) % 997;
    }
    return total;
  }
}

const obj = new LocalContext();
console.log(obj.render_builder(26));

module.exports = LocalContext;
