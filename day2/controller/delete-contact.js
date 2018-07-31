const service = require('../service/contact-service');

module.exports = (req, resp) => {
    // console.log(req.currentUser, 'is deleting this record');

    service.deleteContact(req.params.id)
        .then(data => resp.json(data))
        .catch(err => resp.status(500).json(err));
};