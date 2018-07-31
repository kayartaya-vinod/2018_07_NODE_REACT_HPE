const mariadb = require('mariadb');
const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hpe_training'
});

let data = ['Vinod', 'Kumar', 'Male', 'vinod@vinod.co', '9731424784'];
let sql = 'insert into contacts(firstname, lastname, gender, email, phone) values(?,?,?,?,?)';


pool.getConnection()
    .then(conn => {
        conn.query(sql, data)
            .then(() => console.log('Data inserted!'))
            .catch(() => console.log('Error while inserting data'));
        conn.end();
    })
    .catch(err => console.log('Error while connecting') );

console.log('Bye!');