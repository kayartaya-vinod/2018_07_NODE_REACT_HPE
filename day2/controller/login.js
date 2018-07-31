const userService = require('../service/user-service');
const jwt = require('jsonwebtoken');
const key = process.env.SECRET_KEY;

module.exports = (req, resp) => {
    let { username, password, role } = req.body;

    userService.getUser(username, password)
        .then(data => {
            if (data) {
                const token = jwt.sign(data, key);
                resp.json({
                    message: 'login succeeded',
                    token
                });
            }
            else {
                resp.status(403).json({
                    message: 'username/password invalid'
                });
            }
        })
        .catch(err => resp.status(500).json(err));
};