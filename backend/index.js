const express = require('express')
const app = express()
app.get('/', (request, response) => {
    return response.json({
        name: 'Caio Alves',
        email: 'caiolcalves@gmail.com',
        company: 'ISQ Brasil',
        comercialemail: 'clalves@isqbrasil.com.br',
    })
})

app.listen(3333)
