// Importando o crypto para gerar strings aleatórias para o id
const crypto = require('crypto');

// Importando a conexão com o banco de dados
const connection = require('../database/connection');

// Exportando um objeto com os métodos
module.exports = {

    // Listar todas as ongs
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    // Inserir uma ong
    async create(request, response) {

        const { name, email, whatsapp, city, uf } = request.body;

        // Gera 4 bytes de caractéres hexadecimais aleatórios para o id
        const id = crypto.randomBytes(4).toString('HEX');

        // Inserindo dados 
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
    }
}