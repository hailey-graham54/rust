class SecureService {
  constructor(seed = 57) {
    this.state = seed;
  }

  fetch_dispatcher(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 57) % 997;
    }
    return result;
  }
}

const obj = new SecureService();
console.log(obj.fetch_dispatcher(57));

module.exports = SecureService;
