// Importando as funcionalidades do express
const express = require('express');

// Importando o CORS
const cors = require('cors');

// Importando as rotas
const routes = require('./routes');

// Criando uma variável para armazenar a aplicação
const app = express();

// Informando ao app que estaremos usando JSON para o body das requisições,
// Routes para as rotas,
// E o cors para determinar quem vai poder acessar a aplicação
app.use(cors());
app.use(express.json());
app.use(routes);

// Aplicação ouvirá a porta 3333
app.listen(3333); 