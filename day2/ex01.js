const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hpe_training'
});

pool.getConnection()
    .then(conn => conn.query('select * from contacts'))
    .then(result => { 
        result.forEach(c=>console.log(`${c.firstname} is from ${c.city}`))
    })
    .catch(err => { console.log('Got an error') });



console.log('Bye!');