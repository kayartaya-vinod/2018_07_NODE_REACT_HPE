const maridb = require('mariadb');

const pool = maridb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'hpe_training'
});

module.exports.addNewContact = (contact) => {
    return new Promise((resolve, reject) => {
        const sqlCommand = 'insert into contacts values(null, :firstname, :lastname, :gender, :email, :phone, :city, :state, :country)';
        pool.getConnection()
            .then(conn => {
                conn.query({ namedPlaceholders: true, sql: sqlCommand }, contact)
                    .then(data => {
                        conn.end();
                        resolve(data);
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            })
            .catch(err => reject(err));
    });
};

module.exports.getContactById = (id) => {
    return new Promise((resolve, reject) => {
        pool.getConnection()
            .then(conn => {
                conn.query('select * from contacts where id=?', [id])
                    .then(data => {
                        conn.end();
                        resolve(data.length == 0 ? null : data[0]);
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};

module.exports.getAll = async () => {
    let conn = await pool.getConnection();
    let result = await conn.query('select * from contacts');
    await conn.end();
    return result;
}
// module.exports.getAll = () => {
//     return new Promise((resolve, reject) => {
//         pool.getConnection()
//             .then(conn => {
//                 conn.query('select * from contacts')
//                     .then(data => {
//                         conn.end();
//                         resolve(data);
//                     })
//                     .catch(err => reject(err));
//             })
//             .catch(err => reject(err));
//     });
// };

module.exports.updateContact = (contact) => {
    return new Promise((resolve, reject) => {
        const sqlCommand = 'update contacts set firstname=:firstname, lastname=:lastname, gender=:gender, email=:email, phone=:phone, city=:city, state=:state, country=:country where id=:id';
        pool.getConnection()
            .then(conn => {
                conn.query({ namedPlaceholders: true, sql: sqlCommand }, contact)
                    .then(data => {
                        conn.end();
                        resolve(data);
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            })
            .catch(err => reject(err));
    });
};

module.exports.deleteContact = (id) => {
    return new Promise((resolve, reject) => {
        pool.getConnection()
            .then(conn => {
                conn.query('delete from contacts where id=?', [id])
                    .then(data => {
                        conn.end();
                        if (data.affectedRows == 0) {
                            reject({
                                message: 'Invalid id for deletion: ' + id
                            })
                        }
                        else {
                            resolve({
                                message: 'Record deleted'
                            });
                        }
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
    });
};