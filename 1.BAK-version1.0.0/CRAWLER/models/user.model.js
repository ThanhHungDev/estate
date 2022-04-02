'use strict'
const Sequelize  = require("sequelize"),
      connection = require("./PostgreConnection")

    const USER = connection.define('USER', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        avatar: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        },
        fetch_link: { 
            type: Sequelize.STRING 
        },
        email: {
            type: Sequelize.STRING
        },
        role_id: { 
            type: Sequelize.INTEGER 
        },
        role: { 
            type: Sequelize.INTEGER 
        },
        sale_type: { 
            type: Sequelize.INTEGER 
        },
        background: { 
            type: Sequelize.STRING 
        },
        phone_verify: { 
            type: Sequelize.STRING 
        },
        created_at: {
            type: Sequelize.DATE
        },
        updated_at:  {
            type: Sequelize.DATE
        }
    }, {
        underscored: true,
        timestamps: false,
        tableName: "users"
    })
    USER.prototype.toJSONFor = function () {
        return {
            id    : this.id,
            avatar: this.avatar,
            name  : this.name,
            email : this.email
        }
    }
module.exports = USER