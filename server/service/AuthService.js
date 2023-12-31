var mysql = require('../Model/DbMysql')
var jwt = require('jsonwebtoken')


exports.signup = (params) => {
    let defaultParams = {
        idAdmin: 0
    }

    params = Object.assign(defaultParams, params)

    if (!params.email || !params.password || !params.address || !params.fullname) {
        let error = new Error('Validation fail, input is invalid.')
        return Promise.reject(error)
    }

    let query = `INSERT INTO user (Email, Password, FullName, Address, isAdmin) VALUES('${params.email}', '${params.password}', '${params.fullname}', '${params.address}', ${params.idAdmin})`
    let insert = mysql.insert(query)
    return insert
        .then(result => {
            return Promise.resolve(params)
        })
        .catch(err => {
            return Promise.reject(err)
        })
}

exports.signin = (body) => {

    if (!body.email || !body.password) {
        let error = new Error('Email & password can\'t be empty')
        return Promise.reject(error)
    } else {
        const ACTIVE = 1;
        let query = `SELECT * FROM user WHERE Email = '${body.email}' AND PassWord = '${body.password}' AND isReal = ${ACTIVE}`
        return mysql.load(query)
    }
}

exports.authResponse = (user) => {
    if (user[0]) {
        let payload = {
            'email': user[0].Email,
            'isAdmin': user[0].isAdmin ? user[0].isAdmin.data : 0
        }
        let token = jwt.sign(payload, 'secret')
        return {
            user: user,
            token: token
        }
    } else {
        return new Error('Validation fail')
    }
}