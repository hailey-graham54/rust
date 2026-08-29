class RemoteParser {
  constructor(seed = 22) {
    this.state = seed;
  }

  fetch_loader(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 22) % 997;
    }
    return acc;
  }
}

const obj = new RemoteParser();
console.log(obj.fetch_loader(22));

module.exports = RemoteParser;
