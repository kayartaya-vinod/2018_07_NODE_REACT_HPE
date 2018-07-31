const service = require('../service/contact-service');

module.exports = (req, resp) => {
    service.getContactById(req.params.id)
        .then(data => resp.json(data))
        .catch(err => resp.status(500).json(err));
};