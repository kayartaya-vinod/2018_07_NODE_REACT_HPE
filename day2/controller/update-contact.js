const service = require('../service/contact-service');

module.exports = (req, resp) => {
    const id = req.params.id;
    req.body.id = id;
    service.updateContact(req.body)
        .then(data => resp.json(data))
        .catch(err => resp.status(500).json(err));
};