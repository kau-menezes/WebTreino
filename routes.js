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
const editar_sala = require('./src/controllers/editar_sala');
const excluir_entidade = require('./src/controllers/excluir_entidade');

// routes managment!!! - deppending on the route, the API will direct to a specific controller
route.get('/', home.pagInicialGet); // very first route 
route.post('/', home.pagInicialPost); // filter route

route.post('/cadSala', cadastro.SalaInsert);
route.get('/cadSala', cadastro.sala);

route.get('/cadAluno', cadastro_aluno.alunoRender);
route.post('/cadAluno', multer(config).single('studentAvatarInput'), cadastro_aluno.alunoInsert);

route.get('/editarAluno/:id', editar_aluno.editarAlunos);
route.post('/editarAluno/:id', multer(config).single('studentAvatarInput'), editar_aluno.atualizarAluno);

route.get('/editarSala/:id', editar_sala.editarSalas);
route.post('/editarSala/:id', editar_sala.atualizarSalas);

route.get('/excluirSala/:id', excluir_entidade.excluirSala);
route.get('/excluirAluno/:id', excluir_entidade.excluirAluno);


// exports route as an object that will be used by the express object 
module.exports = route;