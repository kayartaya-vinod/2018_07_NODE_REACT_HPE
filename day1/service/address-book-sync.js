// name of the module relative to the project folder ('day1") 
// is "./service/address-book-sync"

// a module is loaded only once even if 
// there are multiple 'require' statements, and the module.exports is
// cached. The exported object is considered as a singleton.

// Good if no data is maintained. Otherwise export a class instead of object

const contacts = []; // array of contact objects
var idCounter = 0;

module.exports.addContact = function (contact) {

    if (!contact || typeof contact != 'object') {
        throw Error('contact was not supplied or was an object');
    }

    let requiredFields = ['firstname', 'lastname', 'email', 'phone'];
    let missingFields = [];
    requiredFields.forEach(field => { if (field in contact === false) missingFields.push(field) });

    if (missingFields.length > 0) {
        throw Error('required fields missing - ' + missingFields.join());
    }
    contact.id = ++idCounter;
    contacts.push(contact);
};

module.exports.getAll = () => [...contacts];

module.exports.getById = id => {
    if (!id || typeof id != 'number') {
        throw new Error('id was not supplied or was not a number');
    }
    return contacts.find(c => c.id === id);
}