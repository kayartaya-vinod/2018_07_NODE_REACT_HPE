const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const enableCors = require('./middleware/enable-cors');
const checkForAccessToken = require('./middleware/check-for-access-token');

const app = express();
const port = 3000;

// middlewares
app.use(express.static(path.join(__dirname, 'www')));
app.use(enableCors);

// app.use(bodyParser.json());
const jsonBodyParser = bodyParser.json();

app.post('/auth/login', jsonBodyParser, require('./controller/login'));

app.get('/api/contacts', require('./controller/get-contacts'));
app.get('/api/contacts/:id', require('./controller/get-one-contact'));
app.post('/api/contacts', checkForAccessToken, jsonBodyParser, require('./controller/add-contact'));
app.put('/api/contacts/:id', checkForAccessToken, jsonBodyParser, require('./controller/update-contact'));
app.delete('/api/contacts/:id', checkForAccessToken, require('./controller/delete-contact'));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});