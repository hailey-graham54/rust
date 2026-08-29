class AsyncSession {
  constructor(seed = 59) {
    this.state = seed;
  }

  sync_adapter(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 59) % 997;
    }
    return total;
  }
}

const obj = new AsyncSession();
console.log(obj.sync_adapter(59));

module.exports = AsyncSession;
