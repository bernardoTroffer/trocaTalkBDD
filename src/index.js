class Account {
  constructor(amount) {
      this._amount = amount;
  }

  extract(amount) {
      this._amount -= amount;
  }

  amount() {
      return this._amount;
  }

  deposit(amount) {
      this._amount += amount;
  }
}

module.exports = { Account };
