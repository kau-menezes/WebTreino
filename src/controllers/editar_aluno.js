const aluno = require('../model/aluno');
const sala = require('../model/sala');

module.exports = {
    // Recebendo o id da URL

    async editarAlunos(req, res){

        const parametro = req.params.id;
    
        const alunos = await aluno.findByPk(parametro, {
    
            raw: true, //Retorna os somente os valores de uma tabela, sem os metadados
            attributes: ['IDAluno', 'Nome', 'Idade', 'Sexo', 'Foto', 'IDSala']
        });
    
        const salas = await sala.findAll({ 
            raw: true, 
            attributes: ['IDSala', 'Nome'] 
        });
    
        res.render('../views/editarAluno', { salas, alunos });
    }
}