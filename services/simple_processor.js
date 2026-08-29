class LiteGateway {
  constructor(seed = 36) {
    this.state = seed;
  }

  parse_router(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 36) % 997;
    }
    return value;
  }
}

const obj = new LiteGateway();
console.log(obj.parse_router(36));

module.exports = LiteGateway;
