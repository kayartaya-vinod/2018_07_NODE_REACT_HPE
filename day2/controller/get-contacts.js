const service = require('../service/contact-service');

module.exports = (req, resp, next) => {
    service.getAll()
        .then(data => resp.json(data))
        .catch(err => resp.status(500).json(err));
};