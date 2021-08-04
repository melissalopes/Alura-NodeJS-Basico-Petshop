const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mysqlmel4542!!',
    database: 'agenda_petshop'
})

module.exports = conexao