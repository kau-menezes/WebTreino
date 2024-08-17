// sets up the server with the database

const sequelize = require('sequelize');

const database = new sequelize('controle_alunos', 'aulaNode', 'aulaNode@plm098', 
    {
        dialect: 'mssql', 
        host: 'localhost', 
        port: 1433
    }
);

database.sync();

// databse as a sequelize object
module.exports = database;