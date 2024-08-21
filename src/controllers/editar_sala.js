const aluno = require('../model/aluno');
const sala = require('../model/sala');

module.exports = {
    // Recebendo o id da URL

    async editarSalas(req, res) {

        const parametro = req.params.id;

        const salas = await sala.findByPk( parametro,{
            raw: true,
            attributes: ['IDSala', 'Nome', 'Capacidade'],
            where: { IDSala: parametro }
        });

        res.render('../view/editarSala', { salas });
    }, 

    async atualizarSalas(req, res) {
        const dados = req.body;
        const id = req.params.id;

        // Dando upgrade nas novas informações
        await sala.update({
            Nome: dados.roomNameInput,
            Capacidade: dados.roomCapacityInput
        },
        {
            where: { IDSala: id }
        });

        res.redirect('/');
    }

}