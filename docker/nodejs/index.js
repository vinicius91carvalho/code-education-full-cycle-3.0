const express = require('express')
const app = express()
const PORT = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Vinicius')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})