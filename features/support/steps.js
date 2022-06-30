const assert = require('assert')
const {Given, When, Then} = require('@cucumber/cucumber')
const {Account} = require('../../src')


Given('I have an account with ${int}', function (amount) {
    this.account = new Account(amount);
});

When('I extract ${int} from my account', function (amount) {
    this.account.extract(amount);
});

Then('I should have ${int} in my account', function (amount) {
    assert.equal(this.account.amount(), amount);
});

When('I deposit ${int} into my account', function (amount) {
    this.account.deposit(amount);
});


