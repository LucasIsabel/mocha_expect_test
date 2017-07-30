const expect = require('expect.js'),
    utils = require('../utils');

describe('Util Test', () => {
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

    it('should contain 5 into array', () => {
        expect([1, 2, 3])
            .to
            .contain(1)
    })

    it('should contain object value', () => {
        expect({name: "lucas", age: 25})
            .to
            .have
            .property('age')
    })
})
