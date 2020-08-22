// Importando o express
const express = require('express');

// Importando os controllers
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// Desacoplando o módulo de rotas do express em uma nova variável
const routes = express.Router();

// Criando uma rota para o login
routes.post('/session', SessionController.create);

// Criando uma rota para listar todas as ongs
routes.get('/ongs', OngController.index);

// Criando uma rota para inserir uma ong
routes.post('/ongs', OngController.create);

// Criando uma rota para listar uma ong específica
routes.get('/profile', ProfileController.index);

// Criando uma rota para listar todos casos
routes.get('/incidents', IncidentController.index);

// Criando uma rota para inserir um caso
routes.post('/incidents', IncidentController.create);

// Criando uma rota para deletar um caso
routes.delete('/incidents/:id', IncidentController.delete);

// Exportando as rotas
module.exports = routes;