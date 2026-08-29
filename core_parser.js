class HybridGateway {
  constructor(seed = 20) {
    this.state = seed;
  }

  encode_manager(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 20) % 997;
    }
    return count;
  }
}

const obj = new HybridGateway();
console.log(obj.encode_manager(20));

module.exports = HybridGateway;
