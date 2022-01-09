'use strict'
const Sequelize  = require("sequelize"),
      connection = require("./PostgreConnection")

    const PRODUCT = connection.define('PRODUCT', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        category_id: { 
            type: Sequelize.INTEGER 
        },
        user_id: { 
            type: Sequelize.INTEGER 
        },
        fetch_link: { 
            type: Sequelize.STRING 
        },
        title: { 
            type: Sequelize.STRING 
        },
        excerpt: { 
            type: Sequelize.TEXT 
        },
        content: {
            type: Sequelize.TEXT
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
        tableName: "products"
    })
    PRODUCT.prototype.toJSONFor = function () {
        return {
            id    : this.id,
        }
    }
module.exports = PRODUCT