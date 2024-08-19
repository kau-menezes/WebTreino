const aluno = require('../model/aluno');
const sala = require('../model/sala');

module.exports = {
    async alunoRender(req, res) {

        // returns a promise that resolved to an array. each element is a row of the model 
        const salas = await sala.findAll({
            raw: true, 
            attributes: ['IDSala', 'Nome']
        });

        // render function can recieve a second parameter (object) as local variables to the page
        res.render('../view/cadAluno', { salas });
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