const jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IlZpbm9kIEt1bWFyIiwidXNlcm5hbWUiOiJ2aW5vZCIsImlhdCI6MTUzMzAzMDgxNH0.Nx284gHkni7wN49Zh0Mr5mpKnCIMc_n_8hN-NcUG3Y';


const decodedPayload = jwt.verify(token, process.env.SECRET_KEY);

console.log(decodedPayload);