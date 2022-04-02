///connect database
'use strict'
/**
 * import
 */
const Sequelize         = require("sequelize"),
      PostgreConnection = require('./PostgreConnection')

const USER          = require('./user.model')
    //     BOOKING       = require('./Booking'),
    //   DATE_BOOKING  = require('./DateBooking'),
      
    //   TOKEN_REFRESH = require('./TokenRefresh'),
    //   SCHEDULE      = require('./Schedule'),
    //   ORDER         = require('./Order'),
    //   PAYMENT       = require('./Payment'),
    //   EMPLOYER_PROFILE = require("./EmployerProfile"),
    //   SITTER_PROFILE = require("./SitterProfile")
/**
 * variable
 */
let db = {}

// sequelize package
db.Sequelize = Sequelize
// sequelize instance is conection
db.sequelize = PostgreConnection.sequelize
db.connection = PostgreConnection
/**
 * tables
 */
db.USER          = USER
// db.TOKEN_REFRESH = TOKEN_REFRESH
// db.SCHEDULE      = SCHEDULE
// db.BOOKING       = BOOKING
// db.DATE_BOOKING  = DATE_BOOKING
// db.ORDER         = ORDER
// db.PAYMENT       = PAYMENT

// db.EMPLOYER_PROFILE = EMPLOYER_PROFILE
// db.SITTER_PROFILE   = SITTER_PROFILE

// db.BOOKING.hasOne(db.DATE_BOOKING, {foreignKey: 'booking_id'})
// db.BOOKING.belongsTo(db.USER, { as: 'sitter', foreignKey: 'sitter_id' });
// db.BOOKING.belongsTo(db.USER, { as: 'employer', foreignKey: 'employer_id' });
// db.DATE_BOOKING.belongsTo(db.BOOKING, {foreignKey: 'booking_id'})

module.exports = db