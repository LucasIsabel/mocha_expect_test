const expect = require('expect.js'),
    utils = require('../utils');

it('should sum two numbers', () => {
    expect(utils.add(33, 10))
        .to
        .be
        .a('number')
});

it('should sub two numbers', () => {
    expect(utils.rem(10, 10))
        .to
        .be(0)
});