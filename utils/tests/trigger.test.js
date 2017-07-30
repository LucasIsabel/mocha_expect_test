const trigger = require('../trigger'),
    expect = require('expect.js');

describe('Trigger Test', () => {
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

    it('should contain a object type', () => {
        expect({name: "lucas"})
            .to
            .have
            .property('name', 'lucas')
    })

    it('should check if the both object contain values', () => {
        let user = {
            location: 'Brazil',
            age: 25
        }
        const object = trigger.splitName(user, 'Lucas Isabel');
        expect(object)
            .to
            .have
            .property('firstname', 'Lucas')
        expect(object)
            .to
            .have
            .property('lastname', 'Isabel')
        expect(object)
            .to
            .be
            .an('object')
    })

    it('should return 6', (done) => {
        trigger.assyncFcuntion(2, 4, (sum) => {
            expect(sum)
                .to
                .be(6);
            done();
        })
    })

    it('should return welcome', (done) => {
        trigger
            .assyncResult()
            .then((res) => {
                expect(res)
                    .to
                    .be('welcome');
            })
            .catch((err) => {
                throw new Error(`Error ${err}`)
            })
            done();
    })

})
