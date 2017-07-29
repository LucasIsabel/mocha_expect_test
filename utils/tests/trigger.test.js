const trigger = require('../trigger'),
    expect = require('expect.js');

it('should verify the string', () => {
    expect(trigger.sayHello())
        .to
        .be('welcome')
});

it('should not be 12', () => {
    expect(trigger.checkIfNumbersMatch())
        .not
        .to
        .be(11)
});

it('should have the same value', () => {
    expect(trigger.containsAnObject()).eql({name: "lucas"})
});