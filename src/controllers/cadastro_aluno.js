const aluno = require('../model/aluno');
const sala = require('../model/sala');

module.exports = {
    async alunoRender(req, res) {

        const id = req.body.nome;
    
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto'],
            where: { IDSala: id }
        });
    
        res.render('../view/index.ejs', { salas, alunos, id }); 
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome', 'Capacidade']
        });

        // Renderizando e passando o nome das salas para o front
        res.render('../view/cadAluno', {salas, alunos});
    },

    async alunoInsert(req, res) {
        const dados = req.body;

        let foto = 'user-logo.png'

        if (req.file) {
            console.log("caiu no if");
            foto = req.file.filename;
        }

        try {

            await aluno.create ({
                Nome: dados.studentNameInput, 
                Idade:dados.studentAgeInput, 
                Sexo: dados.studentGenderInput, 
                Foto: foto,
                IDSala: dados.studentClassInput
            })

    
            res.redirect('/?status=success');
        } catch (error) {
            console.error('Error inserting aluno:', error);
            res.redirect('/?status=error');
        };
    }

}