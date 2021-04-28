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

try {
    connection.query('CREATE TABLE IF NOT EXISTS people (name varchar(100) NOT NULL PRIMARY KEY)')
    connection.query(`INSERT IGNORE INTO people(name) values('Fulano')`)
} catch(error) {
    console.error(error)
} finally {
    connection.end()
}

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)
    connection.query('SELECT * FROM people', function (error, results, fields) {
        if (error) throw error;

        const name = results[0].name
        res.send(`
            <h1>Full Cycle</h1>
            <p style="color: red">${name}</p>
        `)
      });
    
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})