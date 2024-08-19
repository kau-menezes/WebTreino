const aluno = require('../model/aluno');
const sala = require('../model/sala');

module.exports = {
    async alunoRender(req, res) {
        // Encontrando todas as salas disponíveis no SQL
        const salas = await sala.findAll({
            raw: true, // Retorna somente os valores de uma tabela, sem os metadados.
            attributes: ['IDSala', 'Nome']
        });

        console.log(salas)
        // Renderizando e passando o nome das salas para o front
        res.render('../view/cadAluno', {salas});
    },

    async alunoInsert(req, res) {
        const dados = req.body;

        await aluno.create ({
            Nome: dados.studentNameInput, 
            Idade:dados.studentAgeInput, 
            Sexo: dados.studentGenderInput, 
            Foto: dados.studentAvatarInput,
            IDSala: dados.studentClassInput
        })

        res.render('../view/index');
    }

}