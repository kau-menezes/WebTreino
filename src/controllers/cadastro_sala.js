const sala = require('../model/sala');

// exports the whole file as a js object that will be used in the "routes.js" API
module.exports = {

    // async function waits for the full responde of tthe other server or service 

    async sala(req, res) {
        res.render('../view/cadSala'); // renders the view page
    },

    async SalaInsert(req, res) {
        
        // when the post method is required within the form in the cadSala.ejs route it sends the form as the request body 
        const dados = req.body; 

        // create is a method of the model object 
        await sala.create ({
            Nome: dados.roomNameInput, 
            Capacidade: dados.roomCapacityInput
        });

        // redirects the URL to the main page
        res.redirect('/');
    }

}