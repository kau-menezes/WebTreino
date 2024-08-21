const express = require('express');
const multer = require('multer');

// instance of the the express object
const route = express.Router();

// controllers importation
const config = require('./src/config/multer');
const home = require('./src/controllers/home');
const cadastro = require('./src/controllers/cadastro_sala');
const cadastro_aluno = require('./src/controllers/cadastro_aluno');
const editar_aluno = require('./src/controllers/editar_aluno');

// routes managment!!! - deppending on the route, the API will direct to a specific controller
route.get('/', home.pagInicialGet); // very first route 
route.post('/', home.pagInicialPost); // filter route

route.post('/cadSala', cadastro.SalaInsert);
route.get('/cadSala', cadastro.sala);

route.get('/cadAluno', cadastro_aluno.alunoRender);
route.post('/cadAluno', multer(config).single('studentAvatarInput'), cadastro_aluno.alunoInsert);

route.get('/editarAluno/:id', editar_aluno.editarAlunos);
route.post('/editarAluno/:id', multer(config).single('studentAvatarInput'), editar_aluno.atualizarAluno);

// exports route as an object that will be used by the express object 
module.exports = route;