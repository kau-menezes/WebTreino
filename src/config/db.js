// sets up the server with the database

const sequelize = require('sequelize');

const database = new sequelize('controle_alunos_1', 'aulaNode_1', 'aulaNode_1', 
    {
        dialect: 'mssql', 
        host: 'localhost', 
        // port: 1433 // Bosch 
        port: 49928 // Senai
    }
);

database.sync();

// database as a sequelize object
module.exports = database;