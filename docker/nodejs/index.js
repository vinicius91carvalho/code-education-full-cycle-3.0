const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1>')
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})