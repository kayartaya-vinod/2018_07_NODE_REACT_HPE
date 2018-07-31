const maridb = require('mariadb');

const pool = maridb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hpe_training'
});

module.exports.getUser = (username, password) => {
    return new Promise((resolve, reject) => {
        pool.getConnection()
            .then(conn => {
                const sql = 'select * from users where username=? and password=?';
                conn.query(sql, [username, password])
                    .then(data => {
                        conn.end();
                        resolve(data[0]);
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
}