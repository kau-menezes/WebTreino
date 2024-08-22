const aluno = require('../model/aluno');
const sala = require('../model/sala');
const fs = require('fs');

module.exports = {
    // Recebendo o id da URL

    async excluirSala(req, res) {

        const id = req.params.id;

        const qtdAlunos = await aluno.count({
            where: {IDSala : id}
        });

    console.log(qtdAlunos);


        if (qtdAlunos > 0) {
            res.redirect('/');
            console.log("Cannot delete the class because there are students assigned to it.");

        } else {

            await sala.destroy({
                where: { IDSala: id }
            });
        }

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