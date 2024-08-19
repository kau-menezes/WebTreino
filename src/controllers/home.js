const sala = require('../model/sala');
const aluno = require('../model/aluno');


module.exports = {
    
    async pagInicialGet(req, res){

        const salas = await sala.findAll({
            raw: true, 
            attributes: ['IDSala', 'Nome']
        });

        
        const alunos = await aluno.findAll({
            raw: true, 
            attributes: ['IDAluno', 'Nome', 'Idade', 'IDSala']
        });

        res.render('../view/index', { salas, alunos });
    }
}