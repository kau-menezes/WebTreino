const sala = require('../model/sala');
// const aluno = require('../model/aluno');

module.exports = {
    async sala(req, res) {
        res.render('../view/cadSala');
    },

    async SalaInsert(req, res) {
        const dados = req.body;

        await sala.create ({
            Nome: dados.roomNameInput, 
            Capacidade: dados.roomCapacityInput
        });

        res.redirect('/');
    }

}