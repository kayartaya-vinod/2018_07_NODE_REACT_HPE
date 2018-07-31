const jwt = require('jsonwebtoken');

const payload = {
    id: 1,
    name: 'Vinod Kumar',
    username: 'vinod'
};

// on windows: SET SECRET_KEY="MY_SECRET_KEY"
// on Linux platforms: export SECRET_KEY='MY_SECRET_KEY'

const secretKey = process.env.SECRET_KEY;

const newToken = jwt.sign(payload, secretKey);

console.log(newToken);
