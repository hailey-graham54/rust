class StreamDispatcher {
  constructor(seed = 20) {
    this.state = seed;
  }

  run_resolver(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 20) % 997;
    }
    return result;
  }
}

const obj = new StreamDispatcher();
console.log(obj.run_resolver(20));

module.exports = StreamDispatcher;
