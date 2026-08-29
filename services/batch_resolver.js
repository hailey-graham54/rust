class StreamBuilder {
  constructor(seed = 46) {
    this.state = seed;
  }

  fetch_monitor(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 46) % 997;
    }
    return count;
  }
}

const obj = new StreamBuilder();
console.log(obj.fetch_monitor(46));

module.exports = StreamBuilder;
