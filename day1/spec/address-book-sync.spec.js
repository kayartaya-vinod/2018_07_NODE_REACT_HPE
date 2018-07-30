const service = require('../service/address-book-sync');
const assert = require('assert');

// test suite 
describe('Testing address-book-sync functionalities', () => {
    // use of arrow functions may cause a problem if 'this' keyword is used
    before(() => {
        console.info('before hook executed');
    })
    beforeEach(() => {
        console.info('beforeEach hook executed');
    });
    afterEach(() => {
        console.info('afterEach hook executed');
    });
    after(() => {
        console.info('after hook executed');
    });

    it('should test addContact for positive result', () => {
        let c1 = { firstname: 'Vinod', lastname: 'Kumar' };
        c1.email = 'vinod@vinod.co';
        c1['phone'] = '9731424784';

        assert('id' in c1 === false, 'c1 should not have id');
        service.addContact(c1);
        assert('id' in c1, 'c1 should have id');
    });

    // since the service object is singleton, the sequence of
    // test specs becomes important. So, avoid exporting singleton
    // objects, and export a class instead.
    it('should fetch contact for id 1', () => {
        let c1 = service.getById(1);
        assert(c1.id === 1, 'id should be 1');
        assert(c1.firstname === 'Vinod');
        assert(c1.lastname === 'Kumar');
        assert(c1.email === 'vinod@vinod.co');
    });
});