var config = require('../../config.js');
console.log(config.database.user)
module.exports = {
    username: config.database.user,
    password: config.database.password,
    database: config.database.database,
    host: config.database.host,
    dialect: config.database.dialect,
}
