const Sequelize = require('sequelize');
const database = require('../config/db');

const sala = database.define('Sala',
    {
        IDSala: {
            type: Sequelize.INTEGER, 
            autoIncrement: true, 
            allowNull: false, 
            primaryKey: true
        }, 
        
        Nome: {
            type: Sequelize.STRING(50), 
            allowNull: false
        }, 

        Capacidade: {
            type: Sequelize.INTEGER, 
            allowNull: false, 
        }
    }
)

// exports sala as a model object taht will be used in the controller "cadastro.js"
module.exports = sala;