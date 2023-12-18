var data = require('../Model/DbMysql')

exports.register = (user) => {

    var sql = `INSERT INTO user (Email, PassWord, FullName, Address) VALUES ( '${user.email}', '${user.password}', '${user.fullname}', '${user.address}')`
    /*
    const register=true/false
    return resgiter;
    */ 

    return data.insert(sql)
}