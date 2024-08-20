const aluno = require('../model/aluno');
const sala = require('../model/sala');

module.exports = {
    async alunoRender(req, res) {
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });
        // Encontrando todas as salas disponíveis no SQL

        console.log(salas)
        // Renderizando e passando o nome das salas para o front
        res.render('../view/cadAluno', {salas});
    },

    async alunoInsert(req, res) {
        const dados = req.body;

        try {

            await aluno.create ({
                Nome: dados.studentNameInput, 
                Idade:dados.studentAgeInput, 
                Sexo: dados.studentGenderInput, 
                Foto: dados.studentAvatarInput,
                IDSala: dados.studentClassInput
            })
            
            const salas = await sala.findAll({
                raw: true, 
                attributes: ['IDSala', 'Nome', 'Capacidade']
            });
            
            const alunos = await aluno.findAll({
                raw: true, 
                attributes: ['IDAluno', 'Nome', 'Idade', 'Foto']
            });
    
            const status = req.query.status;
            console.log(status)
    
            res.redirect('/?status=success');
        } catch (error) {
            console.error('Error inserting aluno:', error);
            res.redirect('/?status=error');
        };
    }

}