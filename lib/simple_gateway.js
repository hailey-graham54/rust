class BatchAdapter {
  constructor(seed = 64) {
    this.state = seed;
  }

  load_handler(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 64) % 997;
    }
    return acc;
  }
}

const obj = new BatchAdapter();
console.log(obj.load_handler(64));

module.exports = BatchAdapter;
