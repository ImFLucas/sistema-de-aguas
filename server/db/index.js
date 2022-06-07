const Client = require("pg").Client;

// Criando conexão com o banco de dados
const client = new Client({
  user: "postgres",
  password: "thanatos",
  host: "127.0.0.1",
  port: 5432,
  database: "aguas",
});

module.exports = client;
