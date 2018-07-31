const service = require('../service/contact-service');

module.exports = (req, resp) => {
    service.deleteContact(req.params.id)
        .then(data => resp.json(data))
        .catch(err => resp.status(500).json(err));
};