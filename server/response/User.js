var data = require('../Model/DbMysql');

exports.register = (user) => {
    var sql = `INSERT INTO user (Email, PassWord, FullName, Address) VALUES ('${user.email}', '${user.password}', '${user.fullname}', '${user.address}')`;

    return data.insert(sql)
        .then(insertId => {
            return { success: true, message: 'User registered successfully', insertId: insertId };
        })
        .catch(error => {
            throw error;
        });
}