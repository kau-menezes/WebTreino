const aluno = require('../model/aluno');
const sala = require('../model/sala');

module.exports = {
    async alunoRender(req, res) {

        // const id = req.body.nome;
    
        const alunos = await aluno.findAll({
            raw: true,
            attributes: ['IDAluno', 'Nome', 'Idade', 'Foto']
        });
    
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome', 'Capacidade']
        });

        const salasContador = await Promise.all(salas.map( async (sala) => {
            const qtdAlunos = await aluno.count ( { where: { IDSala : sala.IDSala }})

            return { ...sala, qtdAlunos}
        }));
        
        res.render('../view/cadAluno', { salas: salasContador, alunos });
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