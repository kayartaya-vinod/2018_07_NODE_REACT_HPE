const AddressBookService = require('../service/address-book-async');
const fs = require('fs');
const path = require('path');
const assert = require('assert');
const expect = require('chai').expect;
const should = require('chai').should();

let filename = path.join(__dirname, '..', 'service', 'contacts.json');

describe('Testing address-book-async functionalities', function () {

    beforeEach(function () {
        let data = { contacts: [], idCounter: 3 };
        data.contacts.push({ id: 1, firstname: 'Vinod', lastname: 'Kumar', email: 'vinod@vinod.co', phone: '9731424784' });
        data.contacts.push({ id: 2, firstname: 'Shyam', lastname: 'Sundar', email: 'shyam@example.com', phone: '8881424784' });
        data.contacts.push({ id: 3, firstname: 'Ravi', lastname: 'Kumar', email: 'ravikumar@example.com', phone: '9922424722' });
        fs.writeFileSync(filename, JSON.stringify(data), 'utf-8');
    });

    // while testing async functions, always ask for a function 
    // typically named 'done' and call the same after all assertions are called
    it('should add a new contact', function (done) {
        let service = new AddressBookService();
        let c1 = { firstname: 'Raghavendra', lastname: 'Rao' };
        c1.email = 'rameshrao@example.com';
        c1.phone = '7893334524';
        service.addNewContact(c1, (err, status) => {
            assert(err === null);
            assert(status !== null);
            assert('id' in c1);
            assert(c1.id === 4);
            done(); // indication to the Mocha/Jasmine that the test spec is now complete
        });
    });

    describe('Testing getById()', () => {

        // positive test cases 
        it('should fetch details of contact with id 1', () => {
            let service = new AddressBookService();
            service.getById(1, (err, contact) => {
                expect(err).to.equal(null);
                expect(contact).to.be.a('object');
                expect(contact).to.have.property('firstname')
                    .to.equal('Vinod');
                expect(contact).to.have.property('email');
                expect(contact).to.have.property('phone');
            });
        });

        it('should get all contacts', () => {
            let service = new AddressBookService();
            service.getAll((err, data) => {
                data.should.have.lengthOf(3);
                let c1 = data[0];
                c1.should.be.a('object');
                c1.should.have.property('firstname');
                c1.firstname.should.equal('Vinod');
            });
        });

        // negative test cases
        it('should not fetch details for id 10', () => {
            let service = new AddressBookService();
            service.getById(10, (err, contact) => {
                expect(err).to.equal(null);
                expect(contact).to.equal(undefined);
            });
        });

        it('should throw exception if callback is not supplied', () => {
            let service = new AddressBookService();
            expect(() => {
                service.getById(2);
            }).to.throw(Error);
        });

    });


});