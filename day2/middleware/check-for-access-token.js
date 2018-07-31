const jwt = require('jsonwebtoken');
const key = process.env.SECRET_KEY;

module.exports = (req, resp, next) => {
    const accessToken = req.headers.authorization;
    if (!accessToken) {
        resp.status(403).json({
            message: 'Access token is missing'
        });
        return;
    }
    try {
        req.currentUser = jwt.verify(accessToken, key);
        next();
    }
    catch (err) {
        resp.status(401).json({
            message: 'Access token invalid'
        });
    }

}