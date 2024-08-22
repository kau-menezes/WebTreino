const aluno = require('../model/aluno');
const sala = require('../model/sala');
const fs = require('fs');

module.exports = {
    // Recebendo o id da URL

    async excluirSala(req, res) {

        // 
    },

    async excluirAluno(req, res) {
        const id = req.params.id;

        // Dando upgrade nas novas informações
        await aluno.destroy({
            where: { IDAluno: id }
        });

        res.redirect('/');
    }
}