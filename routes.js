const express = require('express');

// instance of the the express object
const route = express.Router();

// controllers importation
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro_sala');
const cadastro_aluno = require('./src/controllers/cadastro_aluno');

// routes managment!!! - deppending on the route, the API will direct to a specific controller
route.get('/', home.pagInicialGet); // very first route 

route.post('/cadSala', cadastro.SalaInsert)
route.get('/cadSala', cadastro.sala)

route.get('/cadAluno', cadastro_aluno.alunoRender)
route.post('/cadAluno', cadastro_aluno.alunoInsert)

// exports route as an object that will be used by the express object 
module.exports = route;