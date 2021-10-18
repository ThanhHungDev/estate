///connect database
'use strict'
/**
 * import
 */
const Sequelize = require("sequelize"),
      CONFIG    = require('../config')

let sequelize = new Sequelize(
    CONFIG.database.postgre.database_name, 
    CONFIG.database.postgre.username, 
    CONFIG.database.postgre.password, 
    {
        host   : CONFIG.database.postgre.host,
        dialect: CONFIG.database.postgre.dialect,
        logging: CONFIG.database.postgre.logging
    }
)

module.exports = sequelize