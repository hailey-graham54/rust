class FastService {
  constructor(seed = 51) {
    this.state = seed;
  }

  resolve_service(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 51) % 997;
    }
    return result;
  }
}

const obj = new FastService();
console.log(obj.resolve_service(51));

module.exports = FastService;
