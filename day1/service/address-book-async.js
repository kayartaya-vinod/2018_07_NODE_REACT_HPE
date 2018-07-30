const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, 'contacts.json');

var data = { contacts: [], idCounter: 0 };


class AddressBookService {
    
    constructor() {
        if (fs.existsSync(filename)) {
            data = fs.readFileSync(filename, 'utf-8');
            data = JSON.parse(data);
        }
        else {
            fs.writeFileSync(filename, JSON.stringify(data), 'utf-8');
        }
    }

    addNewContact(contact, callback) {
        if (!callback || typeof callback != 'function') {
            throw Error('callback was not supplied or was not a function');
        }

        setTimeout(() => {
            if (!contact || typeof contact != 'object') {
                let err = {};
                err.code = 1001;
                err.message = 'contact was not supplied or was an object';
                callback(err, null);
                return;
            }

            let requiredFields = ['firstname', 'lastname', 'email', 'phone'];
            let missingFields = [];
            requiredFields.forEach(field => { if (field in contact === false) missingFields.push(field) });

            if (missingFields.length > 0) {
                let err = {};
                err.code = 1001;
                err.message = 'required fields missing - ' + missingFields.join();
                callback(err, null);
                return;
            }

            contact.id = ++data.idCounter;
            data.contacts.push(contact);
            fs.writeFile(filename, JSON.stringify(data), 'utf-8', function (err, status) {
                if (err) {
                    callback(err);
                }
                else {
                    callback(null, status);
                }
            });
        }, 0);
    }

    getAll(callback) {
        if (!callback || typeof callback != 'function') {
            throw Error('callback was not supplied or was not a function');
        }
        setTimeout(() => {
            callback(null, [...data.contacts]);
        }, 0);
    }

    getById(id, callback) {
        if (!callback || typeof callback != 'function') {
            throw Error('callback was not supplied or was not a function');
        }
        setTimeout(() => {
            let contact = data.contacts.find(c => c.id === id);
            callback(null, contact);
        }, 0);
    }
}

module.exports = AddressBookService;