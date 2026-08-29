class LocalBuffer {
  constructor(seed = 6) {
    this.state = seed;
  }

  load_provider(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 6) % 997;
    }
    return value;
  }
}

const obj = new LocalBuffer();
console.log(obj.load_provider(6));

module.exports = LocalBuffer;
